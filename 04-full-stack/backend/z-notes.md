CLoud Service Provider

A Cloud Service Provider (CSP) is a third-party company that offers cloud computing infrastructure, platforms, or software services (IaaS, PaaS, SaaS) on a pay-as-you-go basis.

The cloud market is heavily dominated by the "Big Three" hyperscalers, alongside a few fast-growing enterprise and AI-focused alternatives:
1. Amazon Web Services (AWS)
2. MIcrosoft Azure
3. Google Cloud Platform (GCP)

**Cloud Storage Image Upload Workflow** :

`Step 1: Input (image)`
The application receives a file upload (such as an image) from the user on the frontend.

`Step 2: Processing (Cloud storage provider)`
The file is sent to and stored securely by a cloud storage service (e.g., AWS S3, Cloudinary, Firebase Storage).

`Step 3: Output (URL)`
The storage provider generates and returns a unique web address (URL) pointing to the uploaded asset.
This URL is typically saved in the database so it can be rendered easily on the frontend.

**NOTE :**

----> `Image or file is not stored on cloud service instead a url is stored` ?

No, both the file and the URL are stored, but in different places depending on the architecture:

The actual image/file binary is safely stored on the Cloud Storage Provider's servers (like AWS S3 buckets or Cloudinary). Your database doesn't hold the heavy image file itself because databases aren't designed to store large binary files efficiently.

The URL is what gets saved in your Database (e.g., MongoDB, PostgreSQL) alongside your other user or product data.

----> `Why do we only store the URL in the database` ?
Performance: Databases would become massive, slow, and expensive if they stored heavy raw media files (images, videos, PDFs).

Efficiency: Storing a simple string (the URL, e.g., [https://res.cloudinary.com/](https://res.cloudinary.com/)...) takes up minimal space and allows your app to quickly fetch and render the image on the frontend via an <img> tag.