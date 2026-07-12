const saveBtn =
document.getElementById(
    "saveSettingsBtn"
);

saveBtn.addEventListener(
    "click",
    saveSettings
);

function saveSettings(){

    const settings = {

        depotName:
        document.getElementById(
            "depotName"
        ).value,

        currency:
        document.getElementById(
            "currency"
        ).value,

        distanceUnit:
        document.getElementById(
            "distanceUnit"
        ).value
    };

    localStorage.setItem(
        "settings",
        JSON.stringify(settings)
    );

    alert(
        "Settings Saved Successfully"
    );
}

loadSettings();

function loadSettings(){

    const settings =
    JSON.parse(
        localStorage.getItem(
            "settings"
        )
    );

    if(!settings){
        return;
    }

    document.getElementById(
        "depotName"
    ).value =
    settings.depotName;

    document.getElementById(
        "currency"
    ).value =
    settings.currency;

    document.getElementById(
        "distanceUnit"
    ).value =
    settings.distanceUnit;
}