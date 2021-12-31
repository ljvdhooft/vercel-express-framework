<h1>Vercel Express Framework</h1>

<b>1. Clone this git repo, rename folder and navigate into it</b>

```bash
git clone https://github.com/ljvdhooft/vercel-express-framework.git
mv /vercel-express-test /new-name
cd /new-name
```
<br />
<b>2. Install Node Packages for local use</b>

```bash
npm install express
npm install node-fetch@2
npm install dotenv
```
<br />
<b>3. Run locally:</b>

Using npm:
```bash
npm run build
```
Or using Nodemon (if installed):
```bash
nodemon index.js
```
<br />
<b>4. Deploy to Vercel</b>

```bash
vercel deploy
```
Go to Settings > General > Build & Development Settings:<br />
For Output Directory, set override to "`public`"<br />
<br />
<b>5. Create Environment Variables as desired</b><br />
Enjoy! Keep in mind that the vercel project isn't linked to the git repo. To deploy to vercel, use:

```bash
vercel deploy --prod
```