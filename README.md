# My Portfolio Website
Welcome to my Portfolio Website Repo! I built this application using ReactJs and uses Sass styling. I developed this application to be able to showcase my projects, skills, certifications and have people easily contact me. Check it [out!](https://mohammad-portfolio-website.vercel.app/)

![Website Thumbnail](/public/Thumbnail.png)

# How to Run

If you would like to run the application locally, follow the instructions below:

## Environment Variables:

If you would like to build your own portfolio website similar to this one, You will need to create a `.env` file in order for EmailJs to work. This is needed for the contact form on the **Contact** page to work. Here is how you can get it to work:

1. Go to [Emailjs.com](https://www.emailjs.com/) and create an account

2. Navigate to the Dashboard and click on **Email Services**

3. Click on **Add New Service** and select the Email provider you would like to use

4. Click on **Connect Account** to connect your Email account so that you can receive the Emails that the user sends to you via the contact form on the **Contact** page.

5. You should see the Service ID value above the **Connect Account** button. Save that value in your `.env` file as `VITE_EMAILJS_SERVICE_ID='your_service_id'`

6. Click **Create Service**

7. Next, click on the **Email Templates** page on the left sidebar and Click on **Create New Template**

8. Choose the template that you want to use and then click **Create Template**. On the right side, find the **To Email** field and place your Email there so that you can receive the messages sent via the contact form. Then click **Save**.

9. Your Template is now created. You should see the **Template ID** for your template. Save this value in your `.env` as `VITE_EMAILJS_TEMPLATE_ID='your_template_id'`

10. You will now need your **Public Key**. This can be obtained by clicking on the top right of the page where it says `Welcome, [your name]`. Under the **General** tab you should see an **API Keys** section. From there you should see the **Public Key** value. Save this value in your `.env` as `VITE_EMAILJS_PUBLIC_KEY='your_public_key'`

11. Your `.env` should contain three lines. Save your `.env` file. You are now ready to run the application locally!

## Running the Application: 

1. First clone the repository: `git clone https://github.com/mohammadikhan/portfolio-website.git`

2. Go to the main project directory: `cd portfolio-website`

3. Install the dependencies: `npm start`

4. Start the server: `npm run dev`

5. Open your browser and access the link: [http://localhost:5173](http://localhost:5173)

## References:

I built my portfolio website by following [this tutorial](https://www.youtube.com/watch?v=ESHaail1eGc&t=2s) by [Slobodan Gajic](https://github.com/bobangajicsm). I found this tutorial through social media through [Erik Cupsa](https://github.com/Erik-Cupsa). I referred to both [Slobodan](https://github.com/bobangajicsm/react-portfolio-website) and [Erik's](https://github.com/Erik-Cupsa/PortfolioWebsite) portfolio websites when builing mine. For styling and format fixing I made use of GitHub copilot and ChatGPT by sending prompts asking for format and styling fixing.
