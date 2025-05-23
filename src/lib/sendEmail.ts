import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EmailPayload } from "@website/types";
import nodemailer from "nodemailer";

const emailTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
    <meta name="x-apple-disable-message-reformatting" content=""/>
    <title>Rohit Khanduri's Portfolio Alert</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</head>
<style type="text/css">
    body {
        background-color: #ffffff;
        font-family: "Chakra Petch", sans-serif;
    }
    .main-table {
        max-width: 560px;
        margin: 0 auto;
        padding: 20px 0 48px;
        width: 100%;
        > tbody > tr {
            width: 100%;
        }
    }
    .icon {
        display: block;
        outline: none;
        border: none;
        text-decoration: none;
        border-radius: 21px;
        width: 42px;
        height: 42px;
        &.main {
            height: 60px;
            width: 60px;
        }
    }
    h1 {
        font-size: 24px;
        letter-spacing: -0.5px;
        line-height: 1.3;
        font-weight: 400;
        color: #484848;
        padding: 17px 0 0;
    }
    .child-table {
        padding: 27px 0 27px;
        width: 100%;
        > tbody > tr {
            width: 100%;
        }
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
        line-height: 100%;
        text-decoration: none;
        background-color: #5e6ad2;
        border-radius: 3px;
        font-weight: 600;
        color: #fff;
        font-size: 15px;
        text-align: center;
        padding: 11px 23px 11px 23px;
        &.heroku {
            border-style: solid; border-width: 1px !important; border-color: #7E57C2 !important;
            border-radius:3px
            !important; background-color:#ffffff !important;
            > span {
                color: #7E57C2 !important;
            }
        }
        > img {
            width: 42px;
            height: 42px;
        }
        > span {
            height: auto;
        }
    }
    .message {
        font-size: 15px;
        line-height: 1.4;
        margin: 0 0 15px;
        color: #3c4149;
        > code {
            font-family: "Chakra Petch", sans-serif;
            font-style: normal;
            font-weight: 500;
            background-color: #f2f2f2;
            border-radius: 2px;
            padding: 2px 5px;
        }
    }
    hr {
        width:100%;
        border:none;
        border-top:1px solid #eaeaea;
        border-color:#dfe1e4;
        margin:42px 0 26px
    }
    .footer {
        color:#b4becc;text-decoration:none;font-size:14px
    }
</style>
<body>
<table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" class="main-table">
    <tbody>
    <tr>
        <td>
            <img alt="alert" src="https://img.icons8.com/?size=100&id=97745&format=png&color=000000"
                 class="icon main"/>
            <h1 >Update your instagram tester secret!</h1>
            <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" class="child-table">
                <tbody>
                <tr>
                    <td>
                        <a href="https://developers.facebook.com/" target="_blank" class="btn">
                            <img alt="Facebook" height="42" src="https://img.icons8.com/?size=100&id=118555&format=png&color=000000" width="42"/>
                            <span>Login to Facebook Developers</span>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <p class="message">The previous secret has expired, and you need to generate a new one. Click on the button above to Login to Facebook
                developers and generate a new secret.</p>
            <p class="message code">Your Facebook credentials are saved in your Dashlane account. Once you have generated the new secret, update the
                secret in the Heroku Config Vars with the key
                <code>INSTAGRAM_TESTER_SECRET</code>
            </p>
            <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" class="child-table">
                <tbody>
                <tr>
                    <td>
                        <a href="https://dashboard.heroku.com/apps/rohit-khanduri/settings"
                           class="btn heroku"
                           target="_blank">
                            <img alt="Facebook" height="42" src="https://img.icons8.com/?size=100&id=31085&format=png&color=000000"
                                 class="img" width="42"/>
                            <span>Navigate to Heroku App</span>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
            <hr/>
            <a href="https://www.rohit.khanduri.de" class="footer" target="_blank">Cheers!</a>
        </td>
    </tr>
    </tbody>
</table>
</body>

</html>
`;
const smtpOptions: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT ?? "000"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};
const emailData: EmailPayload = {
  to: process.env.SMTP_TO_EMAIL,
  subject: "rohit.khanduri.de -> Your Instagram Tester Secret has expired!",
  html: emailTemplate,
};
export const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...emailData,
  });
};
