import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './firebase';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  pharmacyName?: string;
  role?: string;
}

const LOCAL_PREVIEW_USER_KEY = 'pharmadesk_preview_user';

export const authService = {
  isConfigured: isFirebaseConfigured,

  async login(email: string, password: string): Promise<UserProfile> {
    if (isFirebaseConfigured && auth) {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    }

    // Local Preview Mode for immediate Mac local evaluation without live credentials
    if (!email || !password) {
      throw new Error('Please enter both email and password.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const previewUser: UserProfile = {
      uid: 'preview-usr-' + Math.random().toString(36).substring(2, 9),
      email: email,
      displayName: email.split('@')[0].toUpperCase(),
      pharmacyName: 'Sanjivani Medicos (Demo Store)',
      role: 'Pharmacist Administrator',
    };
    sessionStorage.setItem(LOCAL_PREVIEW_USER_KEY, JSON.stringify(previewUser));
    return previewUser;
  },

  async signup(
    fullName: string,
    email: string,
    password: string,
    pharmacyName?: string
  ): Promise<UserProfile> {
    if (isFirebaseConfigured && auth) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (fullName) {
        await updateProfile(user, { displayName: fullName });
      }
      return {
        uid: user.uid,
        email: user.email,
        displayName: fullName || user.displayName,
        pharmacyName,
      };
    }

    // Local Preview Mode
    if (!email || !password || !fullName) {
      throw new Error('Please fill in all required fields.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const previewUser: UserProfile = {
      uid: 'preview-usr-' + Math.random().toString(36).substring(2, 9),
      email: email,
      displayName: fullName,
      pharmacyName: pharmacyName || 'My Medical Store',
      role: 'Pharmacy Owner',
    };
    sessionStorage.setItem(LOCAL_PREVIEW_USER_KEY, JSON.stringify(previewUser));
    return previewUser;
  },

  async logout(): Promise<void> {
    if (isFirebaseConfigured && auth) {
      await fbSignOut(auth);
    }
    sessionStorage.removeItem(LOCAL_PREVIEW_USER_KEY);
  },

  async resetPassword(email: string): Promise<void> {
    if (isFirebaseConfigured && auth) {
      await sendPasswordResetEmail(auth, email);
      return;
    }
    // Simulation in preview mode
    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    // Success simulated
  },

  getCurrentUser(): UserProfile | null {
    if (isFirebaseConfigured && auth && auth.currentUser) {
      const u = auth.currentUser;
      return {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName,
      };
    }
    const saved = sessionStorage.getItem(LOCAL_PREVIEW_USER_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  },

  onAuthStateChange(callback: (user: UserProfile | null) => void) {
    if (isFirebaseConfigured && auth) {
      return onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          callback({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          });
        } else {
          callback(null);
        }
      });
    }

    // For preview mode, check session storage
    const current = this.getCurrentUser();
    callback(current);
    return () => {};
  },
};
