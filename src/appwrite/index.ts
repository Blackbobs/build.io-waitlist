import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("669aeaa80014de9755b8");

const databases = new Databases(client);

// const promise = databases.createDocument(
//   "669aeb560037c7d31414",
//   "669aeb6d001df729bbaa",
//   ID.unique(),
//   { title: "Hamlet" }
// );

// promise.then(
//   function (response) {
//     console.log(response);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

export const addToWaitlist = async (
  firstname: string,
  email: string,
  role: string
) => {
  try {
    const response = await databases.createDocument(
      "669aeb560037c7d31414",
      "669aeb6d001df729bbaa",
      ID.unique(),
      { firstname: firstname, email: email, role: role }
    );

    console.log(response)
  } catch (error) {
    console.log(error);
  }
};
