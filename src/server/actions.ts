'use server'

import { db } from '@/lib/db/firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/db/firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { redirect } from 'next/navigation';

const user = getAuth().currentUser;


export async function createUser(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { success: false, message: 'Please fill in all fields.' };
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        console.log('User created:', user);
    } catch (error) {
        console.error('Error creating user:', error);
    }
    redirect('/sign-in')
}

export async function signInUser(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return { success: false, message: 'Please fill in all fields.' };
    }

    try {
        const userCredential = signInWithEmailAndPassword(
            auth,
            email as string,
            password as string
        );
    } catch (error) {
        console.error('Error signing in user:', error);
    }

    redirect('/')
}

export async function signOutUser() {
    await auth.signOut();
    redirect('/')
}

export async function getUserData() {
    if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    return null;
}

export async function updateUserData(data: any) {
    if (user) {
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, data);
        return { success: true, message: 'User data updated successfully!' };
    } else {
        return { success: false, message: 'User not logged in.' };
    }
}

export async function deleteUser() {
    if (user) {
        await deleteDoc(doc(db, 'users', user.uid));
        return { success: true, message: 'User deleted successfully!' };
    }
    return { success: false, message: 'User not logged in.' };
}


export async function addData(data: any) {
    try {
        const newDocRef = await addDoc(collection(db, 'yourCollectionName'), data);
        console.log('Data added with ID:', newDocRef.id);
        return { success: true, message: 'Data added successfully!' };
    } catch (error) {
        console.error('Error adding data:', error);
        return { success: false, message: 'An error occurred.' };
    }
}