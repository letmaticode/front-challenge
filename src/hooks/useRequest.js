import {useState} from "react";

export const useRequest = (initialFilters, productFilters, filterTypeMap, isMobile, headers ) => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  
  function loading() {
    document.body.style.cursor = 'wait';
    //document.getElementById('spinner-container').style.display ="flex";
    console.log("Loading");
    setLoadingSpinner(true);
  }

  function stopLoading() {
    document.body.style.cursor = 'default';
    //document.getElementById('spinner-container').style.display = "none";
    console.log("Stop Loading");
    setLoadingSpinner(false);
  }

  function resetAlerts() {
    setErrors({});
    setMessage(null);
  }

  function beforeSubmit() {
    setSubmitted(true);
    setSuccess(null);
    resetAlerts();
    loading();
  }

  function afterSubmit() {
    setSubmitted(false);
    stopLoading()
  }

  function showSuccess(message) {
    afterSubmit();
    setSuccess(true);
    console.log("daaa");
    console.log(message);
    setMessage(message);
  }

  function showError(message, errors = {}) {
    afterSubmit();
    setSuccess(false);
    setMessage(message);
    setErrors(errors);
  }

  function dealWithError(response, codeMsgError = "Error", callback = null) {
    if ([400, 401, 404, 409, 422].includes(response.status)) {
        response.json().then((data) => {
          localStorage.setItem('error', '');
          localStorage.setItem('error', data);
            if (Array.isArray(data)) {
                showError(data.join(", "));
            } else if ('detail' in data) {
                showError(data['detail']);
            } else if ('message' in data && 'error' in data) {
                showError(data['message'], data['error']);
            } else if ('error' in data) {
                showError(data['error']);
            } else {
                showError(codeMsgError, data);
            }
            if (callback) callback();
        });
    } else {
        showError(codeMsgError);
        if (callback) callback();      
    }
  }

  return {
    submitted, setSubmitted,
    success, setSuccess,
    errors, setErrors,
    message, setMessage,
    loadingSpinner, setLoadingSpinner,

    beforeSubmit, afterSubmit,
    showSuccess, showError,
    dealWithError
  };
}

export default useRequest;