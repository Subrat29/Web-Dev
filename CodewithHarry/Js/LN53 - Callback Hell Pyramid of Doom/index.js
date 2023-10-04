// Callbacks
function loadScript(src, callback)
{
    let script = document.createElement("script");
    script.src = src;

    script.onload = function(){
        console.log("script loaded\n" + src);
        callback(null,src);
    }

    script.onerror = function(){
        console.log("Error loading script with src\n" + src)
        callback(new Error("Src got an element"));
    }

    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("hello!\n script loaded\n" + src);
}

function goodmorning(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Good Morning!\n script loaded\n" + src);
}

loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap1.bundle.min.js", function goodmorning(error, src){
    loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src){
        loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src){
            loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src){
                loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src){
                    loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src){
                        loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src){
                            loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src){
                                loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src){
                                    loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src){
                                        loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src){
                                            loadScript("htjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src){});
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});