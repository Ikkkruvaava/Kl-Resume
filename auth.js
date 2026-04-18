import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export const { 
  handlers: { GET, POST }, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        await dbConnect();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          // Check if username is already taken or generate one
          let baseUsername = user.email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "");
          let uniqueUsername = baseUsername;
          let counter = 1;
          
          while (await User.findOne({ username: uniqueUsername })) {
            uniqueUsername = `${baseUsername}${counter}`;
            counter++;
          }

          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            username: uniqueUsername,
            portfolio: {
              bio: "",
              careerField: "",
              skills: [],
              socialLinks: [],
              projects: [],
              education: [],
              experience: [],
            }
          });
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        await dbConnect();
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.username = dbUser.username;
          session.user.id = dbUser._id.toString();
        }
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
