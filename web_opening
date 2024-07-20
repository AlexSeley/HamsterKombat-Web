if(location.hostname === "hamsterkombatgame.io") {
    const org_indexOf = Array.prototype.indexOf
    Array.prototype.indexOf = function (...args) {
        if(JSON.stringify(this) === JSON.stringify(["android", "android_x", "ios"])) {
            setTimeout(() => {
                Array.prototype.indexOf = org_indexOf
            })
            return 0
        }
        return org_indexOf.apply(this, args)
    }
}
