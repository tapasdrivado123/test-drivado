import React from "react";

const EmailInvoice = () => {
  return (
    <div>
      <table border="0" cellPadding="0" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <td bgcolor="#ffffff" align="center">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                className="wrapper container"
              >
                <tr>
                  <td align="left" valign="top" width="40%" className="logo">
                    <img
                      alt="Logo"
                      src="https://media.licdn.com/dms/image/C561BAQE_zPoAVY2cEg/company-background_10000/0?e=2159024400&v=beta&t=ouOGfTrOXUjt-k3m5AOOT-oODzwTejb22KyB7KHUZ2U"
                      width="200"
                      height="108"
                      className="block"
                      border="0"
                    />
                  </td>
                  <td
                    align="right"
                    valign="top"
                    width="60%"
                    className="pt-5 text-sm text-black padding-copy2"
                  >
                    <ul className="contacts">
                      <li>Drivado Transfers Pvt. Ltd.</li>
                      <br />
                      <li>P-3, New C.I.T. Road,</li>
                      <br />
                      <li>Kolkata - 700073</li>
                      <br />
                      <li>
                        Email Us:{" "}
                        <a href="mailto:support@drivado.com">
                          support@drivado.com
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td bgcolor="#ffffff" align="center" className="p-4">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                style="max-width:700px;"
                className="responsive-table"
              >
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tr>
                        <td
                          align="left"
                          style="font-size:24px;font-weight:600;font-family:'Open Sans', sans-serif;color:#000;padding-top:30px;"
                          className="padding-copy"
                        >
                          PROFORMA INVOICE
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="font-size: 16px; font-family: 'Open Sans', sans-serif; color: #000; padding-top: 30px;"
                          className="padding-copy"
                        >
                          Invoice To,
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="padding: 20px 15px 0 30px; font-size: 16px; line-height: 25px; font-family: 'Open Sans', sans-serif; color: #000;"
                          className="padding-copy"
                        >
                          company_name
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td
              bgcolor="#ffffff"
              align="center"
              style="padding: 15px;"
              className="padding"
            >
              <table
                frame="box"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                style="max-width: 700px;border: 1px solid #ececec;background-color: #fafafa;"
                className="responsive-table"
              >
                <tr>
                  <td>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      width="100%"
                      style="background-color: #e6e6e6;"
                    >
                      <tr>
                        <td valign="top" className="mobile-wrapper">
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="100%"
                            style="width: 100%;margin-left: 10px;margin-top: 5px;"
                            align="left"
                          >
                            <tr>
                              <td style="padding: 0 0 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="font-family:Arial, sans-serif;color:#000;font-size:16px;font-weight:600;padding-top:6px"
                                    >
                                      INVOICE DETAILS
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td>
                    <br />

                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="top" className="mobile-wrapper">
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="35%"
                            style="width: 35%;margin-left: 15px;"
                            align="left"
                          >
                            <tr>
                              <td style="padding: 0 0 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="font-family: Arial, sans-serif; color: #000; font-size: 16px;"
                                    >
                                      <b>Invoice No.:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="60%"
                            style="width: 60%;"
                            align="right"
                          >
                            <tr>
                              <td style="padding: 0 10px 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="font-family: Arial, sans-serif; color: #000;text-align: left; font-size: 16px;padding-right: 15px;"
                                    >
                                      invoice_number
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td
                          valign="top"
                          style="padding: 0;"
                          className="mobile-wrapper"
                        >
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="35%"
                            style="width: 35%;margin-left: 13px;"
                            align="left"
                          >
                            <tr>
                              <td style="padding: 0 0 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="font-family: Arial, sans-serif; color: #000; font-size: 16px;"
                                    >
                                      <b>Booking No.:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="60%"
                            style="width: 60%;"
                            align="right"
                          >
                            <tr>
                              <td style="padding: 0 10px 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="font-family: Arial, sans-serif; color: #000;text-align: left; font-size: 16px;padding-right: 15px;"
                                    >
                                      booking_number
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td
                          valign="top"
                          style="padding: 0;"
                          className="mobile-wrapper"
                        >
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="35%"
                            style="width: 35%;margin-left: 15px;"
                            align="left"
                          >
                            <tr>
                              <td style="padding: 0 0 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="font-family: Arial, sans-serif; color: #000; font-size: 16px;"
                                    >
                                      <b>Invoice Date:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="60%"
                            style="width: 60%;"
                            align="right"
                          >
                            <tr>
                              <td style="padding: 0 10px 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="font-family: Arial, sans-serif; color: #000;text-align: left; font-size: 16px;padding-right: 15px;"
                                    >
                                      invoice_dateAndTime
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td
              bgcolor="#ffffff"
              align="center"
              style="padding: 15px;"
              className="padding"
            >
              <table
                frame="box"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                style="max-width: 700px;border: 1px solid #ececec;background-color: #fafafa;"
                className="responsive-table"
              >
                <tr>
                  <td>
                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      width="100%"
                      style="background-color: #e6e6e6;"
                    >
                      <tr>
                        <td valign="top" className="mobile-wrapper">
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="100%"
                            style="width: 100%;margin-left: 10px;margin-top: 5px;"
                            align="left"
                          >
                            <tr>
                              <td style="padding: 0 0 10px 0;">
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="98%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      width="65%"
                                      style="width:65%;font-family:Arial, sans-serif;color:#000;font-size:16px;font-weight:600;padding-top:6px;"
                                    >
                                      DESCRIPTION
                                    </td>
                                    <td
                                      align="right"
                                      width="25%"
                                      style="width:25%;font-family:Arial, sans-serif;color:#000;font-size:16px;font-weight:600;padding:6px 10px;"
                                    >
                                      AMOUNT
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />

                    <table
                      cellSpacing="0"
                      cellPadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="top" className="mobile-wrapper">
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="70%"
                            style="width: 70%;margin-left: 15px;"
                            align="left"
                          >
                            <tr>
                              <td>
                                <table
                                  cellPadding="0"
                                  cellSpacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="padding: 0 0 10px 0;font-family: Arial, sans-serif; color: #000; font-size: 16px;"
                                    >
                                      <b>From:</b> from
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="padding:0 0 10px 0;font-family:Arial, sans-serif;color:#000;text-align:left;font-size:16px;"
                                    >
                                      <b>To:</b> to
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            width="25%"
                            style="width: 25%;"
                            align="right"
                          >
                            <tr>
                              <td
                                align="right"
                                style="font-family: Arial, sans-serif; color: #000;font-size: 16px;padding:0 15px 10px 0;"
                              >
                                booking_price
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td
              bgcolor="#ffffff"
              align="center"
              style="padding: 15px 15px 5px 15px;"
            >
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                style="max-width: 700px;"
                className="responsive-table"
              >
                <tr>
                  <td align="right">
                    <table
                      width="100%"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tr>
                        <td
                          align="right"
                          style="padding: 0; font-size: 16px; line-height: 18px; font-family: 'Open Sans', sans-serif; color:#000;"
                          className="padding-copy alignRight"
                        >
                          <b>Total Amount booking_price </b>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td
              bgcolor="#ffffff"
              align="center"
              style="padding: 15px 15px 5px 15px;"
            >
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                className="max-w-lg responsive-table"
              >
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tr>
                        <td>
                          <table
                            width="100%"
                            border="0"
                            cellSpacing="0"
                            cellPadding="0"
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0; font-size: 14px; line-height: 18px; font-family: 'Open Sans', sans-serif; color:#000;"
                                className="padding-copy"
                              >
                                Thank you for your business!
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 15px;">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                style="max-width: 700px;"
                className="responsive-table"
              >
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tr>
                        <td>
                          <table
                            width="100%"
                            border="0"
                            cellSpacing="0"
                            cellPadding="0"
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0 0 0 0; font-size: 15px; line-height: 18px; font-family: 'Open Sans', sans-serif; color:#000;"
                                className="padding-copy"
                              >
                                Best Regards,
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="left"
                                style="padding: 5px 0 0 0; font-size: 15px; line-height: 18px; font-family: 'Open Sans', sans-serif; color:#000;"
                                className="padding-copy"
                              >
                                Your Drivado Team
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 15px;">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                style="max-width: 700px;"
                className="responsive-table"
              >
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tr>
                        <td>
                          <table
                            width="100%"
                            border="0"
                            cellSpacing="0"
                            cellPadding="0"
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0 0 0 0; font-size: 14px; line-height: 18px; font-family: 'Open Sans', sans-serif; color:grey; font-style: italic;"
                                className="padding-copy"
                              >
                                DISCLAIMER:
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            width="100%"
                            border="0"
                            cellSpacing="0"
                            cellPadding="0"
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0 0 0 0; font-size: 10px; line-height: 18px; font-family: 'Open Sans', sans-serif; color: #aaaaaa; font-style: italic;"
                                className="padding-copy"
                              >
                                This e-mail contains PRIVILEGED AND CONFIDENTIAL
                                INFORMATION intended solely for the use of the
                                addressee(s). If you are not the intended
                                recipient, please notify the sender by e-mail
                                and delete the original message. Further, you
                                are not to copy, disclose, or distribute this
                                e-mail or its contents to any other person and
                                any such actions are unlawful. This e-mail may
                                contain viruses. DRIVADO has taken every
                                reasonable precaution to minimize this risk, but
                                is not liable for any damage you may sustain as
                                a result of any virus in this e-mail. You should
                                carry out your own virus checks before opening
                                the e-mail or attachment. DRIVADO reserves the
                                right to monitor and review the content of all
                                messages sent to or from this e-mail address.
                                Messages sent to or from this e-mail address may
                                be stored on the DRIVADO e-mail system.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EmailInvoice;
