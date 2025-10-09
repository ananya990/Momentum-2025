export default function getHtml(name, waLink, eventName) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You for Registering</title>

  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #800000;
      font-family: Arial, sans-serif;
    }

    .btn-gold {
      background-color: #FFD700;
      color: #800000 !important;
      padding: 12px 24px;
      border-radius: 5px;
      font-weight: bold;
      display: inline-block;
      text-decoration: none !important;
      border: 2px solid transparent;
      transition: border-color 0.3s ease;
    }

    .btn-gold:hover {
      border-color: #800000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    a {
      text-decoration: none;
    }
    
    .btn-whatsapp {
        background-color: #25D366;
        color: #ffffff !important;
        text-decoration: none !important;
        padding: 10px 20px;
        border-radius: 5px;
        display: inline-block;
        border: 2px solid transparent;
        font-weight: bold;
        transition: border 0.3s ease;
    }

    .btn-whatsapp:hover {
        border: 4px solid #ffffff;
    }

    /* Mobile responsiveness */
    @media screen and (max-width: 620px) {
      table[class="responsive-table"] {
        width: 100% !important;
      }

      img {
        max-width: 100% !important;
        height: auto !important;
      }

      .footer-icons td {
        display: inline-block !important;
        text-align: center !important;
        width: auto !important;
      }
    }
  </style>
</head>
<body>

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #800000; background-image: url('https://www.transparenttextures.com/patterns/always-grey.png'); background-repeat: repeat; background-size: auto;">
    <tr>
      <td align="center" style="padding: 20px;">

        <!-- Inner content container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #fce6ce; border: 6px solid #FFD700; padding: 20px;" class="responsive-table">

          <!-- Header with logos and thank you image -->
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="left" valign="top" width="33%">
                    <img src="https://res.cloudinary.com/dbrfvleoy/image/upload/v1759950510/NCU-Logo_izgoif.png" alt="NCU Logo" style="max-height: 60px;">
                  </td>
                  <td align="center" valign="top" width="34%">
                    <img src="https://res.cloudinary.com/dbrfvleoy/image/upload/v1759949187/Thank_you_for_registering_r5bgdi.png" alt="Thank You" style="display: block; margin: 0 auto; height: 200px; width: auto; margin: 0px 0px 0px 10px">
                  </td>
                  <td align="right" valign="top" width="33%">
                    <img src="https://res.cloudinary.com/dbrfvleoy/image/upload/v1759950289/MMT-Logo_usdls1.png" alt="MMT Logo" style="max-height: 60px;">
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main message -->
          <tr>
            <td style="font-size: 16px; color: #333; line-height: 1.6;">
              <p>Hello <strong>${name}</strong>,</p>

              <p>Thank you for registering for <strong>MOMENTUM</strong>, our annual technical and cultural fest!</p>

              <p>We’re thrilled to have you on board and can’t wait for you to experience everything we’ve lined up.</p>

              <p><strong>📣 What’s Next?</strong><br>
              You’ll receive further updates and event details soon.<br>
              Until then, if you have any questions, feel free to reach out to us at 
              <a href="mailto:momentum@ncuindia.edu" style="color: #800000; text-decoration: none;">momentum@ncuindia.edu</a>.</p>

              <p><strong>Join the WhatsApp Group for ${eventName}</strong><br>
              Stay connected and get updates by joining the WhatsApp group:</p>

              <p style="text-align: center;">
                <a href="${waLink}" class="btn-whatsapp" target="_blank">
                👉 Join Here
                </a>

              </p>

              <p>Thanks once again for joining us — we look forward to seeing you at <strong>MOMENTUM 2025!</strong></p>

              <p>Warm regards,<br>
              <strong>Team MOMENTUM 2025<br>
              The NorthCap University</strong></p>
            </td>
          </tr>

          <!-- Show More button -->
          <tr>
            <td align="center" style="padding: 20px 0;">
              <a href="https://momentum.ncuindia.edu/" class="btn-gold" target="_blank">
                Show More
              </a>
            </td>
          </tr>

        </table>

        <!-- Footer section with social media icons -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="15" border="0" style="background-color: #fce6ce; margin-top: 20px;" class="responsive-table">
          <tr>
            <td align="center" style="font-size: 14px; color: #333;">
              <a href="https://momentum.ncuindia.edu/" target="_blank" style="margin: 0 12px;">
                <img src="https://cdn-icons-png.flaticon.com/512/2997/2997746.png" alt="Website" width="32" height="32" style="vertical-align: middle; border-radius: 4px;">
              </a>
              <a href="https://www.instagram.com/ncumomentum/" target="_blank" style="margin: 0 12px;">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" width="32" height="32" style="vertical-align: middle;">
              </a>
              <a href="https://www.youtube.com/channel/UCBbpxkdsOHEVokkCMMxDD8A" target="_blank" style="margin: 0 12px;">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="32" height="32" style="vertical-align: middle;">
              </a>
              <a href="https://www.facebook.com/ncumomentum/" target="_blank" style="margin: 0 12px;">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" width="32" height="32" style="vertical-align: middle;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>


  `;
  }