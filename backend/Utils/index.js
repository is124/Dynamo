const  getWebsiteName = (url) =>{
    const trimmedURL = url.replace(/^(https?:\/\/)/i, '');
    const domainName = trimmedURL.split('/')[0]; 
    const domainWithoutWWW = domainName.replace(/^www\./i, '');
  
    const websiteName = domainWithoutWWW.split('.')[0];
    const capitalizedWebsiteName = websiteName.charAt(0).toUpperCase() + websiteName.slice(1);
  
    return capitalizedWebsiteName;
  }

module.exports = {getWebsiteName};