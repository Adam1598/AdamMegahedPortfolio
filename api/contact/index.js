module.exports = async function (context, req) {

    const { name, email, message } = req.body;

    context.log("New Contact Form Submission:");
    context.log("Name:", name);
    context.log("Email:", email);
    context.log("Message:", message);

    context.res = {
        status: 200,
        body: {
            message: "Message received successfully!"
        }
    };
};