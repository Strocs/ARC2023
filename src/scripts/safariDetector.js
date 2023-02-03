const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
const safariVersion = isSafari && /Version\/([0-9.]+) Safari/.exec(navigator.userAgent)[1]

if (isSafari && parseFloat(safariVersion) <= 14) {
	alert(
		`Notamos que estas usando la versión de Safari ${safariVersion}. Para una mejor experiencia, considera actualizar tu navegador.`
	)
}
