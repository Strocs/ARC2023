export const header = document.querySelector('header')
export const logo = header.querySelector('#logo-text')
export const menu = header.querySelectorAll('input')
export const downloadScheduleBtn = document.querySelector('span')
export const socialMediaLinks = document.querySelectorAll('#social-networks')
export const navbar = document.querySelector('nav')
export const footer = document.querySelector('footer')
export const mapContainer = document.querySelector('#map-container')
export const map = !!mapContainer && mapContainer.querySelector('div')
export const mapLabels = !!mapContainer && map.querySelectorAll('.names')
export const linkToMapOwners = !!mapContainer && map.querySelector('a')
export const mapGuide = document.querySelector('#map-guide')
export const resetButton = document.querySelector('#reset-button')
export const spanResetButton = !!resetButton && resetButton.querySelector('span')
export const locationsInfo = document.querySelectorAll('[aria-label="location-info"]')
export const searchBar = document.getElementById('search-bar')
