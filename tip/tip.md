Creating a React app
Please make sure that you are using the LTS version of Node, otherwise errors may occur. Fire up a terminal instance, cd into the folder containing your projects, and enter the following command (you can replace my-first-react-app with any name you want):

npm create vite@latest my-first-react-app -- --template react
If you see the following output, enter y and then press enter:

Need to install the following packages:
  create-vite@5.X.X
Ok to proceed? (y)
Once the command has executed, it should output the next steps for you to follow:

cd my-first-react-app
npm install
npm run dev
Provided everything has gone according to plan, head over to localhost:5173, where you’ll be greeted with the following page:

Vite React template homepage

Congratulations! You’ve created your first React app.

To link your local project directory to a GitHub repo, create a new empty repo on GitHub then follow the instructions in the new repo’s page to connect it to your local project directory.

Using an existing repo
Alternatively, if you created a GitHub repo already and cloned it, you can cd into your cloned repo then run the above Vite command, using . as the project name:

npm create vite@latest . -- --template react
This will tell Vite to use the current directory for the project, instead of creating a new directory with the given project name. This cloned directory will already be initialized as a git repo and connected to the right remote.