
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: 'Hadis Asgari', email: 'hadis@gmail.com' ,password: 'password'};
        if (user) {
          // Return the user object if authentication is successful
          return Promise.resolve(user);
        } else {
          // Return null or false if authentication fails
          return Promise.resolve(null);
        }
      },
    }),
    // Add more providers as needed
  ],
  pages :{
    
  }
});


    