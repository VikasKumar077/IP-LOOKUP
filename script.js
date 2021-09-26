let ipAddress = document.getElementById("ipAddress");
let ISPname = document.getElementById("ISPname");
let CITYname = document.getElementById('CITYname');
let REGION = document.getElementById("REGIONname");
let COUNTRYname = document.getElementById("COUNTRYname");
let COUNTRYcode = document.getElementById("COUNTRYcode");
let TIMEZONE = document.getElementById("TIMEZONE");


fetch('http://ip-api.com/json/')
   
          .then((response) => {
            return response.json();
          })
          .then((apidata) => {
            ipAddress.innerHTML = apidata.query;
            ISPname.textContent = apidata.isp;
            CITYname.textContent = apidata.city;
            REGION.textContent = apidata.regionName;
            COUNTRYname.textContent = apidata.country;
            COUNTRYcode.textContent = apidata.countryCode;
            TIMEZONE.textContent = apidata.timezone;
            console.log(apidata);
          })
          .catch((error) => {
            console.log(`The Error ${error}`);
          });


// for entered ip address--
let lookupBtn = document.getElementById("lookupBtn");

lookupBtn.addEventListener('click', () => {
        
    let EnteredIp = document.getElementById("EnteredIp").value;
    
    if (EnteredIp == "")
    {
        alert('Enter IP Address');
    }
    else
    {

        
        fetch(`http://ip-api.com/json/${EnteredIp}`)
            
           
        .then((response2) => {
          return response2.json();
        })
        .then((apidata2) =>
        {
          if (apidata2.status == "fail") {
              let warning = document.getElementById("warning");
              let allData2 = document.getElementById("all-data2");
              warning.style.display = "block";
              allData2.style.display = "none";
          } else {
            let container2 = document.getElementById('container2');
              container2.style.display = "block";
            let ipAddress2 = document.getElementById("ipAddress2");
            let ISPname2 = document.getElementById("ISPname2");
            let CITYname2 = document.getElementById("CITYname2");
            let REGION2 = document.getElementById("REGIONname2");
            let COUNTRYname2 = document.getElementById("COUNTRYname2");
            let COUNTRYcode2 = document.getElementById("COUNTRYcode2");
            let TIMEZONE2 = document.getElementById("TIMEZONE2");

            ipAddress2.innerHTML = apidata2.query;
            ISPname2.textContent = apidata2.isp;
            CITYname2.textContent = apidata2.city;
            REGION2.textContent = apidata2.regionName;
            COUNTRYname2.textContent = apidata2.country;
            COUNTRYcode2.textContent = apidata2.countryCode;
            TIMEZONE2.textContent = apidata2.timezone;
            console.log(apidata2);
          }
        })
            
        .catch((error2) => {
          console.log(`The Error ${error2}`);
        });
    }

    })