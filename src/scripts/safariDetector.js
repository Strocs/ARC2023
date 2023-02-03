const isIphone = /iPhone/.test(navigator.userAgent)
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
const safariVersion = isSafari && /Version\/([0-9.]+) Safari/.exec(navigator.userAgent)[1]

if (isIphone && isSafari && parseFloat(safariVersion) <= 12) {
	document.body.innerHTML = `<p>Notamos que estas usando la versión de Safari ${safariVersion}. Para una mejor experiencia, considera actualizar tu navegador.</p>`
}

if (isSafari && parseFloat(safariVersion) <= 13) {
	alert(
		`Notamos que estas usando la versión de Safari ${safariVersion}. Para una mejor experiencia, considera actualizar tu navegador.`
	)
}
