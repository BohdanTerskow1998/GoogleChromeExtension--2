const yellow = ["yellow"];
const white = ["white"];
const green = ["green"];
const blue = ["blue"];
const red = ["red"];


document.querySelector(".bg-y").onclick = () =>
{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs) =>
  {
    chrome.scripting.executeScript(
    {
      target: {tabId: tabs[0].id},
      func: foo_yellow,
      args: [yellow[0]]
    })
  })
};

document.querySelector(".bg-w").onclick = () =>
{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs) =>
  {
    chrome.scripting.executeScript(
    {
      target: {tabId: tabs[0].id},
      func: foo_white,
      args: [white[0]]
    })
  })
}; 

document.querySelector(".bg-r").onclick = () =>
{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs) =>
  {
    chrome.scripting.executeScript(
    {
      target: {tabId: tabs[0].id},
      func: foo_red,
      args: [red[0]]
    })
  })
}

document.querySelector(".bg-g").onclick = () =>
{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs) =>
  {
    chrome.scripting.executeScript(
    {
      target: {tabId: tabs[0].id},
      func: foo_green,
      args: [green[0]]
    })
  })
}

document.querySelector(".bg-b").onclick = () =>
{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs) =>
  {
    chrome.scripting.executeScript(
    {
      target: {tabId: tabs[0].id},
      func: foo_blue,
      args: [blue[0]]
    })
  })
}



function foo_yellow(color)
{
  document.body.style.backgroundColor = color;
};

function foo_white(color)
{
  document.body.style.backgroundColor = color;
};

function foo_green(color)
{
  document.body.style.backgroundColor = color;
};

function foo_red(color)
{
  document.body.style.backgroundColor = color;
};

function foo_blue(color)
{
  document.body.style.backgroundColor = color;
};