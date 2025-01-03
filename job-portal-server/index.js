const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// give cookis permission to client site in cors
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser())

// const loger = (req, res, next) => {
//     console.log('Inside the loger')
//     next();
// }
const verifyToken = (req, res, next) => {
    // console.log('Inside the verify token', req.cookies)
    const token = req?.cookies?.token;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorised Access' })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Authorised Access' })
        }
        req.user = decoded;
        // if valid then go
        next();
    })

}



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wpavw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");


        const jobsCollection = client.db('jobPortal').collection('jobs');
        const jobApplicationCollection = client.db('jobPortal').collection('Job_application');

        // Job related API
        // // Get jobs
        // app.get('/jobs', async (req, res) => {
        //     const cursor = jobsCollection.find();
        //     const result = await cursor.toArray();
        //     res.send(result)
        // })
        // Get jobs
        app.get('/jobs', async (req, res) => {
            // get by email
            const email = req.query.email;
            let query = {};
            if (email) {
                query = { hr_email: email }
            }
            const cursor = jobsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })
        // get job by id
        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await jobsCollection.findOne(query);
            res.send(result);
        })
        // create job
        app.post('/jobs', async (req, res) => {
            const newJob = req.body;
            const result = await jobsCollection.insertOne(newJob);
            res.send(result);
        })




        // Job apllication Related API

        // get all data, get one  data, get some data
        // get data by email {http://localhost:5000/job-applications?email=abir@gmail.com}
        app.get('/job-applications', verifyToken, async (req, res) => {
            const email = req.query.email;
            const query = { applicant_email: email }

            // set cookies
            // console.log('cok cookies', req.cookies);
            if (req.user.email !== req.query.email) {
                return rs.status(403).send({ message: 'forbidden access' })
            }

            const result = await jobApplicationCollection.find(query).toArray();

            // not best way to aggregate data
            for (const application of result) {
                const query1 = { _id: new ObjectId(application.job_id) }
                const job = await jobsCollection.findOne(query1);
                if (job) {
                    application.title = job.title;
                    application.location = job.location;
                    application.company = job.company;
                    application.company_logo = job.company_logo;
                }
            }

            res.send(result)
        })

        // get job application data for applied job
        app.get('/job-applications/jobs/:job_id', async (req, res) => {
            const jobId = req.params.job_id;
            const query = { job_id: jobId }
            const result = await jobApplicationCollection.find(query).toArray();
            res.send(result);
        })

        // post job data
        app.post('/job-applications', async (req, res) => {
            const application = req.body;
            const result = await jobApplicationCollection.insertOne(application);

            // Not best way 
            // Best way is Use Aggregate
            const id = application.job_id;
            const query = { _id: new ObjectId(id) }
            const job = await jobsCollection.findOne(query);
            let newCount = 0;
            if (job.applicationCount) {
                newCount = job.applicationCount + 1;
            }
            else {
                newCount = 1;
            }
            // Now update the job info
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    applicationCount: newCount
                }
            }
            const updateResult = await jobsCollection.updateOne(filter, updateDoc);

            res.send(result);
        })
        // update status for job application
        app.patch('/job-applications/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    status: data.status
                }
            }
            const result = await jobApplicationCollection.updateOne(filter, updateDoc);
            res.send(result);
        })



        // Auth Related Api
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
            res
                // send to client site
                .cookie('token', token, {
                    httpOnly: true,
                    // set true on production time
                    secure: false,
                })
                .send({ success: true });
        })



    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Job is falling from the sky')
})

app.listen(port, () => {
    console.log(`Job is waiting at: ${port}`);
})