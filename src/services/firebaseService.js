import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, getDocs, query, where, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDANIjtOQlawe1EoIU7hl_UK6xTkrIIk_g",
  authDomain: "mathosphere-fe4c0.firebaseapp.com",
  projectId: "mathosphere-fe4c0",
  storageBucket: "mathosphere-fe4c0.firebasestorage.app",
  messagingSenderId: "24522161588",
  appId: "1:24522161588:web:940650783c53673ef706e1",
  measurementId: "G-PPVFXGBE2J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonctions pour récupérer des données
export async function getDailyChallenge() {
  const docRef = doc(db, 'daily_challenges', 'today');
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function getMathematicianOfMonth() {
  const docRef = doc(db, 'mathematicians', 'current_month');
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function getInformation() {
  const q = query(collection(db, 'information'), orderBy('date', 'desc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
}

export async function getDocuments(level) {
  const q = query(collection(db, 'documents'), where('level', '==', level));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
}

// Export explicite de `db`
export { db };
