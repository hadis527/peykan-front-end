import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const MainLayout = ({ children }) => {
    const router = useRouter();

    const handleLogout = async () => {
        const result = await signOut({
            redirect: false
        });
        if (result.error) {

        }
        else {
            router.push("/login");

        }
    }
    return (
        <div class="flex flex-col h-screen overflow-auto">
            <header class="flex justify-between items-center bg-gray-800 text-white py-4 px-6">
                <div class="flex items-center">
                    <nav class="mr-6">
                        <ul class="flex space-x-4">
                            <li><Link href="/userProfilePage" class="text-white hover:text-gray-300">Profile</Link></li>
                            <li><Link href="/editProfilePage" class="text-white hover:text-gray-300">Edit Profile</Link></li>
                            <li><Link href="createPostPage" class="text-white hover:text-gray-300">create post</Link></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <button class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                        ocClick={handleLogout}
                    >Logout</button>
                </div>
            </header>

            <div class="flex flex-col items-center  pt-5">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;