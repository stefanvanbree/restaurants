import axios from 'axios';

export default axios.create({

    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 9inSyTqhomM5gTxVLaWgjz09KMdSM5_2nj-YUqtn4Y9o1y6pk6X_evjdCXQdJpQNjmOgHyQcJdLAFhntUZnhQ_hGK9dtwRyJpxrB5NmDPPLuzMSfoDeXYZhnZG-lXXYx'
    }

});

