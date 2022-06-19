export default function handler(req, res) {
  if (req.method === "POST") {
    const env = process.env;
    console.log(env);
    const MidtransInstance = require("midtrans-client");
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    };

    const snap = new MidtransInstance.Snap({
      isProduction: false,
      serverKey: env.MIDTRANS_SERVER_KEY,
      clientKey: env.MIDTRANS_CLIENT_KEY,
    });

    const payment_params = {
      transaction_details: {
        order_id: `PAY--${+new Date() - Math.random() * 10}`,
        gross_amount: parseInt(100000),
      },
      customer_details: {
        fistname: "Muhamad Zain Test",
        last_nam: "Test Front end",
        email: "Muhamadzaindev@gmail.com",
      },
      credit_card: {
        secure: true,
      },
    };

    snap
      .createTransaction(payment_params)
      .then((transactions) => {
        const { token, redirect_url } = transactions;
        console.log(token);
        console.log(redirect_url);
        res.status(200).send({
          statusCode: 200,
          headers,
          body: JSON.stringify({
            url: redirect_url,
            params: payment_params,
          }),
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({
          statusCode: 400,
          headers,
          body: JSON.stringify(err),
        });
      });
  } else {
    res.status(404).send({
      statusCode: 404,
      body: {
        message: "routes not define",
      },
    });
  }
}
