import React from 'react';


const GSTFAQ = (props) => {

  return (
    
        <div class="margin-b-6">
          <div class="container">
		    <div class="row justify-content-center">
			  <div class="container">
                  <div class="banner_title">
                    <h2>
					The following documents must be 
					<span class="c-red"> submitted by regular taxpayers</span> 
					applying for GST registration.
                    </h2>
                  </div>
                </div>
              </div>
			  <br/>
            <div class="row">
              <div class="col-lg-4">
                <div class="title_sections">
                  <h3>PAN card of the business</h3>
                  <p>GST registration is linked to the PAN of the business. Hence, PAN must be obtained for the legal entity before applying for GST Registration.</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="title_sections mb-0">
                  <h3>Identity proof along with photographs</h3>
				  <p>PAN, passport, driving license, aadhar card or voter’s identity card
				  can be submitted as identity proof. Photographs of the promoters/ proprietors also need to be submitted.
				  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="title_sections">
                  <h3>Address proof of promoter</h3>
                  <p>Documents like passport, driving license, aadhaar card, 
				  voters identity card and ration card can be submitted as address proof.</p>
                </div>
              </div>
			</div>
			<div class="row">
              <div class="col-lg-4">
                <div class="title_sections">
                  <h3>Business registration document</h3>
                  <p>Proof of business registration must be submitted for all types of entities. There is no requirement of submitting this document for 
				  a proprietorship as the proprietor and the entity are essentially considered the same.</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="title_sections mb-0">
                  <h3>Business location proof</h3>
				  <p>Address proof must be provided for all places of businesses mentioned in the GST registration application. The following documents are acceptable as address proof for GST registration.</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="title_sections">
                  <h2>Bank account proof</h2>
                  <p>Scanned copy of the first page of bank passbook or the relevant page of bank statement or scanned copy of a cancelled cheque containing name of the proprietor or business entity, bank account no., MICR, IFSC and branch details including code needs to be uploaded.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
  );
}

export default GSTFAQ;