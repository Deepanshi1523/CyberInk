# CyberInk
<h3>Technology Stack:</h3>
<p><b>&nbsp&nbspFrontend (Client Side):</b> React.js</p>
<p><b>&nbsp&nbspBackend (Server Side):</b> Node.js with Express.js</p>
<p><b>&nbsp&nbspDatabase:</b> MongoDB</p>
<p><b>&nbsp&nbspAuthentication:</b> JWT (JSON Web Tokens)</p>

<h3>Features:</h3>
<p>&nbsp&nbspUser registration and authentication.</p>
<p>&nbsp&nbspCreate, edit, and delete blog posts.</p>
<p>&nbsp&nbspView a list of blog posts.</p>
<p>&nbsp&nbspComment on blog posts.</p>
<p>&nbsp&nbspJWT-based authentication for secure user sessions.</p>

<h3>Architecture:</h3>

<p><b>&nbsp&nbspFrontend (React.js):</b></p>
<p>&nbsp&nbsp&nbspReact is used for building the user interface. </p>
<p>&nbsp&nbsp&nbspComponents for displaying blog posts, handling user authentication, and managing user &nbsp&nbsp&nbspinteractions.</p>

<p><b>&nbsp&nbspBackend (Node.js with Express.js):</b></p>
<p>&nbsp&nbsp&nbspExpress.js is used to create a RESTful API.</p>
<p>&nbsp&nbsp&nbspRoutes for user authentication (registration, login) and managing blog posts (CRUD operations).</p>
<p>&nbsp&nbsp&nbspInteraction with the MongoDB database using Mongoose for data storage and retrieval.</p>

<p><b>&nbsp&nbspDatabase (MongoDB):</b></p>
<p>&nbsp&nbsp&nbspMongoDB is used as a NoSQL database to store user information, blog posts, and comments.</p>

<p><b>&nbsp&nbspAuthentication (JWT):</b></p>
<p>&nbsp&nbsp&nbspJWT is employed for secure user authentication.</p>
<p>&nbsp&nbsp&nbspWhen a user logs in, the server generates a JWT containing the user's information and sends it back to the client.</p>
<p>&nbsp&nbsp&nbspThe client includes this token in the headers of subsequent requests, allowing the server to verify the user's identity.</p>

<h3>Workflow:</h3>

<p><b>&nbsp&nbspUser Registration and Login:</b></p>
<p>&nbsp&nbsp&nbspUsers register by providing necessary information (username, email, password).</p>
<p>&nbsp&nbsp&nbspPasswords are securely hashed and stored in the database.</p>
<p>&nbsp&nbsp&nbspJWT is generated upon successful login and sent to the client.</p>

<p><b>&nbsp&nbspBlog Post Management:</b></p>
<p>&nbsp&nbsp&nbspAuthenticated users can create, edit, and delete their blog posts.</p>
<p>&nbsp&nbsp&nbspBlog posts are stored in the MongoDB database.</p>

<p><b>&nbsp&nbspAuthentication with JWT:</b></p>
<p>&nbsp&nbsp&nbspJWT is used for secure authentication.</p>
<p>&nbsp&nbsp&nbspEach request to the server includes the JWT token in the headers.</p>
<p>&nbsp&nbsp&nbspThe server validates the token, allowing or denying access accordingly.</p>

<p><b>&nbsp&nbspCommenting System:</b></p>
<p>&nbsp&nbsp&nbspUsers can comment on blog posts.</p>
<p>&nbsp&nbsp&nbspComments are associated with specific blog posts in the database.</p>

<h3>Security Considerations:</h3>

<p>&nbsp&nbsp&nbspPasswords are hashed before storage.</p>
<p>&nbsp&nbsp&nbspJWT helps secure communication between the client and server.</p>
<p>&nbsp&nbsp&nbspAuthorization checks ensure that users can only edit or delete their own blog posts.</p>
