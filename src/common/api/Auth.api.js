import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const SignUpApi = (data) => {
    console.log('SignUpApi', data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Check Your Email" });
                        })
                        .catch((e) => {
                            reject({ payload: e })
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    resolve({ payload: 'Email is already Verified' })
                } else {
                    reject({ payload: errorCode })
                }
            })
    })
}

export const SignInApi = (data) => {
    console.log("SignInApi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user.emailVerified) {
                    resolve({ payload: user });
                } else {
                    reject({ payload: "First Is Email Varify." });
                }
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/wrong-password") == 0) {
                    reject({ payload: "Email or Password Wrong" });
                } else if (errorCode.localeCompare("auth/user-not-found") == 0) {
                    reject({ payload: "Password Wrong" });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const SignOutApi = () => {
    console.log("SignOutApi");

    return new Promise((resolve, reject) => {
        signOut(auth)
            .then(() => {
                resolve({ payload: "Logout SuccessFully" })
            })
            .catch(() => {
                reject({ payload: "SomeThing Is Worng" });
            })
    })
}

export const SigninWithGoogle = () => {
    console.log("data");

    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                resolve({ payload: user })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject({ payload: error })
            });
    })
}

export const forGotPasswordApi = (data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "Check Your Email And ForgotpassWord" })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                reject({ payload: "Email is wrong" })
            });
    })
}