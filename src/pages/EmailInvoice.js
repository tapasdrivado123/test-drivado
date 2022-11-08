import React from "react";
import "./invoice.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const EmailInvoice = () => {

  const downloadInvoice = () => {
    const input = document.getElementById("invoice");
    html2canvas(input, {
      // scrollX: -window.scrollX,
      // width:800,
      // height: 3000,
      windowHeight: 500,
      windowWidth: 600,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(imgData, "JPEG", 10, 50);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div >
      <div onClick={downloadInvoice} >Download invoice</div>
      <table id="invoice" border="0" cellpadding="0" cellspacing="0" width="100%" className="max-w-[700px] p-4">
        <thead>
          <tr>
            <td bgcolor="#ffffff" align="left" className="wrapper">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                className="pb-2 border-b"
              >
                <tr>
                  <td align="left" valign="top" width="40%">
                    <img
                      alt="Logo"
                      src={ require("../assets/drivado-logo.png")}
                      width="200"
                      height="108"
                      className="block pt-6 pl-0"
                      border="0"
                    />
                  </td>
                  <td
                    align="right"
                    valign="top"
                    width="60%"
                    className="p-2 pt-5 pb-5 text-[14px] text-black padding-copy2"
                  >
                    <ul className="contacts">
                      <li>Drivado Transfers Pvt. Ltd.</li>
                      <br />
                      <li>P-3, New C.I.T. Road,</li>
                      <br />
                      <li>Kolkata - 700073</li>
                      <br />
                      <li>
                        Email Us:
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
            <td bgcolor="#ffffff" align="left" className="wrapper">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                className="max-w-[700px] responsive-table mb-6"
              >
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tr>
                        <td className="pt-4 font-sans text-xl font-semibold text-left text-black">
                          PROFORMA INVOICE
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-5 pl-3 font-sans text-[14px] font-normal text-left text-black">
                          Invoice To,
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-3 pl-3 font-sans text-[14px] text-left text-black bold">
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
            <td bgcolor="#ffffff" align="left" className="padding wrapper">
              <table                
                cellpadding="0"
                cellspacing="0"
                width="100%"
                className="max-w-[700px] border bg-[#fafafa]"
              >
                <tr>
                  <td>
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      width="100%"
                      className="bg-[#e6e6e6]"
                    >
                      <tr>
                        <td valign="top" className="pt-0.5 pb-3.5 pl-3 mobile-wrapper">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="100%"
                            className="w-full text-left"
                          >
                            <tr>
                              <td>
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="text-black text-[14px] font-semibold"
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
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="top" className="flex mobile-wrapper ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            className="w-[35%] ml-3 text-left"
                            width="35%"
                          >
                            <tr>
                              <td className="pb-1">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px] "
                                    >
                                      <b>Invoice No.:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="60%"
                            className="w-3/5 text-left"
                          >
                            <tr>
                              <td className="pb-1">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-left text-[13px]"
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
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="top" className="p-0 mobile-wrapper">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="35%"
                            className="w-[35%] ml-3 text-left"
                            align="left"
                          >
                            <tr>
                              <td className="pb-1">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px]"
                                    >
                                      <b>Booking No.:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="60%"
                            className="w-3/5 text-left"
                            align="left"
                          >
                            <tr>
                              <td>
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px] text-left"
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
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="top" className="p-0 mobile-wrapper">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="35%"
                            className="w-[35%] ml-3 text-left"
                            align="left"
                          >
                            <tr>
                              <td className="pb-3">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px]"
                                    >
                                      <b>Invoice Date:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="60%"
                            className="w-3/5 text-left"
                            align="left"
                          >
                            <tr>
                              <td className="pb-3 pr-3">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px]"
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
            <td bgcolor="#ffffff" align="left" className="padding wrapper">
              <table                
                cellpadding="0"
                cellspacing="0"
                width="100%"
                className="max-w-[700px] border bg-[#fafafa]"
              >
                <tr>
                  <td>
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      width="100%"
                      className="bg-[#e6e6e6]"
                    >
                      <tr>
                        <td valign="top" className="pt-0.5 pb-3.5 pl-3 mobile-wrapper">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="100%"
                            className="w-full text-left"
                          >
                            <tr>
                              <td>
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="text-black text-[14px] font-semibold"
                                    >                                      
                                      DESCRIPTION
                                    </td>
                                    <td
                                      align="right"
                                      className="text-black pr-3 text-[14px] font-semibold"
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
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="top" className="flex space-x-3 mobile-wrapper ">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            className="w-[35%] ml-3 text-left"
                            width="35%"
                          >
                            <tr>
                              <td className="pb-1">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px] "
                                    >
                                      <b>From:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="60%"
                            className="w-3/5 text-right"
                          >
                            <tr>
                              <td className="pb-1">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="right"
                                      className="font-sans text-black text-right text-[13px]"
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
                  <td>
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="top" className="p-0 mobile-wrapper">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="35%"
                            className="w-[35%] ml-3 text-left"
                            align="left"
                          >
                            <tr>
                              <td className="pb-1">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px]"
                                    >
                                      <b>To:</b>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="60%"
                            className="w-3/5 text-left"
                            align="left"
                          >
                            <tr>
                              <td>
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      className="font-sans text-black text-[13px] text-left"
                                    >
                                      
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
            <td align="center" className="p-4">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" className="max-width-[700px] responsive-table">
                    <tr>
                        <td align="right">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="right" className="p-0 font-sans text-[13px] text-right text-black padding-copy"><b>Total Amount: booking_price</b></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>              
            </td>
          </tr>
          
          <tr>
            <td className="px-3">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="left" className="p-0 font-sans text-[14px] text-black padding-copy">Thank you for your business!</td>
                </tr>
                  <tr>
                      <td align="left" className="pt-6 font-sans text-[14px] text-black padding-copy">Best Regards,</td>
                  </tr>
                  <tr>
                      <td align="left" className="p-0 font-sans text-[14px] text-black padding-copy">Your Drivado Team</td>
                  </tr>
              </table>
            </td>
          </tr>

          <tr>
              <td className="px-3 py-5">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="left" className="p-0 text-[8px] italic text-gray-600 padding-copy"><span className="font-semibold">DISCLAIMER:</span><br />This e-mail contains PRIVILEGED AND CONFIDENTIAL INFORMATION intended solely for the use of the addressee(s). If you are not the intended recipient, please notify the sender by e-mail and delete the original message. Further, you are not to copy, disclose, or distribute this e-mail or its contents to any other person and any such actions are unlawful. This e-mail may contain viruses. DRIVADO has taken every reasonable precaution to minimize this risk, but is not liable for any damage you may sustain as a result of any virus in this e-mail. You should carry out your own virus checks before opening the e-mail or attachment. DRIVADO reserves the right to monitor and review the content of all messages sent to or from this e-mail address. Messages sent to or from this e-mail address may be stored on the DRIVADO e-mail system.</td>
                    </tr>
                </table>
              </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default EmailInvoice;
