module.exports = async function (context, req) {

    const { name, email, message } = req.body;

    context.res = {
        status: 200,
        body: {
            success: true,
            message: "Message received!"
        }
    };
};