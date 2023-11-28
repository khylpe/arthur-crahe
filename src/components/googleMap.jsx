import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

import { Loader } from "@googlemaps/js-api-loader";

import { withLanguage } from '../contexts/languageContext';
import { translations } from '../translations';

// images : 
import poutrainIMG from "../img/poutrain.webp";
import vauvenarguesIMG from "../img/vauvenargues.jpg"
import hpsIMG from "../img/hps.webp"
import izitekIMG from "../img/IZITEK.png"
import alternanceIMG from "../img/alternance.jpg"
import cesiIMG from "../img/cesi.jpg"

const GoogleMap = (props) => {
       const { language } = props;
       const navigate = useNavigate();
       const mapRef = useRef(null);

       const theme = useMemo(() => ([
              {
                     "featureType": "all",
                     "elementType": "geometry.fill",
                     "stylers": [
                            {
                                   "weight": "2.00"
                            }
                     ]
              },
              {
                     "featureType": "all",
                     "elementType": "geometry.stroke",
                     "stylers": [
                            {
                                   "color": "#9c9c9c"
                            }
                     ]
              },
              {
                     "featureType": "all",
                     "elementType": "labels.text",
                     "stylers": [
                            {
                                   "visibility": "on"
                            }
                     ]
              },
              {
                     "featureType": "landscape",
                     "elementType": "all",
                     "stylers": [
                            {
                                   "color": "#f2f2f2"
                            }
                     ]
              },
              {
                     "featureType": "landscape",
                     "elementType": "geometry.fill",
                     "stylers": [
                            {
                                   "color": "#ffffff"
                            }
                     ]
              },
              {
                     "featureType": "landscape.man_made",
                     "elementType": "geometry.fill",
                     "stylers": [
                            {
                                   "color": "#ffffff"
                            }
                     ]
              },
              {
                     "featureType": "poi",
                     "elementType": "all",
                     "stylers": [
                            {
                                   "visibility": "off"
                            }
                     ]
              },
              {
                     "featureType": "road",
                     "elementType": "all",
                     "stylers": [
                            {
                                   "saturation": -100
                            },
                            {
                                   "lightness": 45
                            }
                     ]
              },
              {
                     "featureType": "road",
                     "elementType": "geometry.fill",
                     "stylers": [
                            {
                                   "color": "#eeeeee"
                            }
                     ]
              },
              {
                     "featureType": "road",
                     "elementType": "labels.text.fill",
                     "stylers": [
                            {
                                   "color": "#7b7b7b"
                            }
                     ]
              },
              {
                     "featureType": "road",
                     "elementType": "labels.text.stroke",
                     "stylers": [
                            {
                                   "color": "#ffffff"
                            }
                     ]
              },
              {
                     "featureType": "road.highway",
                     "elementType": "all",
                     "stylers": [
                            {
                                   "visibility": "simplified"
                            }
                     ]
              },
              {
                     "featureType": "road.arterial",
                     "elementType": "labels.icon",
                     "stylers": [
                            {
                                   "visibility": "off"
                            }
                     ]
              },
              {
                     "featureType": "transit",
                     "elementType": "all",
                     "stylers": [
                            {
                                   "visibility": "off"
                            }
                     ]
              },
              {
                     "featureType": "water",
                     "elementType": "all",
                     "stylers": [
                            {
                                   "color": "#46bcec"
                            },
                            {
                                   "visibility": "on"
                            }
                     ]
              },
              {
                     "featureType": "water",
                     "elementType": "geometry.fill",
                     "stylers": [
                            {
                                   "color": "#c8d7d4"
                            }
                     ]
              },
              {
                     "featureType": "water",
                     "elementType": "labels.text.fill",
                     "stylers": [
                            {
                                   "color": "#070707"
                            }
                     ]
              },
              {
                     "featureType": "water",
                     "elementType": "labels.text.stroke",
                     "stylers": [
                            {
                                   "color": "#ffffff"
                            }
                     ]
              }
       ]), []);

       const markersDetails = useMemo(() => ({
              cesi: {
                     img: cesiIMG,
                     sourceLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faix-en-provence.cesi.fr%2Ffr%2Factualites%2Fcesi-devoile-sa-nouvelle-identite%2F&psig=AOvVaw3cx7fH1sNn2k0Pwri-uYLh&ust=1691418799885000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD82pegyIADFQAAAAAdAAAAABAg",
                     source: "Source",
                     position: {
                            lat: 43.48280355537496,
                            lng: 5.386372834788107
                     }
              },
              alternance: {
                     img: alternanceIMG,
                     sourceLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecole-air-espace.fr%2F&psig=AOvVaw3dcQOSpAi5aGxd4EgarJVm&ust=1691417798849000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC9qrqcyIADFQAAAAAdAAAAABA6",
                     source: "Source : © G.Lecomte / Armée de l'air",
                     position: {
                            lat: 43.62004911396142,
                            lng: 5.1130963636300475
                     }
              },
              izitek: {
                     img: izitekIMG,
                     sourceLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.izitek.net%2F&psig=AOvVaw01-eRrrgpKNKDqMYgdP2Qo&ust=1691417679224000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi7ooGcyIADFQAAAAAdAAAAABAE",
                     source: "Source",
                     position: {
                            lat: 43.554853672571994,
                            lng: 5.36093962817364
                     }
              },
              hps: {
                     img: hpsIMG,
                     sourceLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmesinfos.fr%2Fprovence-alpes-cote-d-azur%2Fsalon-un-conseil-municipal-exceptionnel-va-se-tenir-a-lhopital-mercredi-10-mai-a-18h30-177091.html&psig=AOvVaw1cLlrjqdWDZJK26FLCjKsX&ust=1691419202380000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCszdehyIADFQAAAAAdAAAAABAE",
                     source: "Source",
                     position: {
                            lat: 43.63836280534788,
                            lng: 5.102535847696708
                     }
              },
              vauvenargues: {
                     img: vauvenarguesIMG,
                     sourceLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.patrimoine-religieux.fr%2Feglises_edifices%2F13-Bouches-du-Rh%25C3%25B4ne%2F13001-Aix-en-Provence%2F193107-Lesanciensclo%25C3%25AEtresdelanciencouventdesDamesCarmelites%2CactuellyceeVauvenargues.&psig=AOvVaw29weNTTMP5yzemzp8B8s1j&ust=1691416512993000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDIl9WXyIADFQAAAAAdAAAAABBZ",
                     source: "source : © Henri Lieutier",
                     position: {
                            lat: 43.5288792588086,
                            lng: 5.455594863282646
                     }
              },
              poutrain: {
                     img: poutrainIMG,
                     sourceLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Falpesdusud.alpes1.com%2Fnews%2Fhautes-alpes%2F67496%2Fhautes-alpes-trois-portes-ouvertes-au-lycee-professionnel-poutrain&psig=AOvVaw2A_F7npobTe0ZHPsfASRlh&ust=1691412859759000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICZqYeKyIADFQAAAAAdAAAAABAE",
                     source: "Source",
                     position: {
                            lat: 44.67084309133449,
                            lng: 6.21570154679287
                     }
              },
       }), []);

       const centerOfTheMap = useMemo(() => ({ lat: 44.09854259648287, lng: 5.816817404169226 }), []);

       useEffect(() => {
              const generateContent = (id) => {
                     const translation = translations[language].about.map.markers[id];

                     return (`<div class="bg-gray-200 p-4 rounded-lg space-y-3">
                                   <h2 class="text-gray-700 text-xl font-bold">
                                          ${translation.name}
                                   </h2>
                                   <img
                                          src=${markersDetails[id].img}
                                          alt="${translation.name}"
                                          class="w-64 rounded-lg">
                                          
                                   <div class="text-center">
                                          <a href=${markersDetails[id].sourceLink}
                                                 target="_blank"
                                                 class="text-blue-500 text-center hover:text-blue-600">
                                                        ${markersDetails[id].source}
                                          </a>
                                   </div>
                                   <p class="text-gray-700 w-64">
                                          ${translation.description}
                                   </p>
                                   
                            </div>`);
              };

              {/* <a
                                          id="more-details-link"
                                          class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                 ${translations[language].about.map.markers.more}
                                   </a> */
              }
              const generateAriaLabel = (id) => {
                     const translation = translations[language].about.map.markers[id];
                     const ariaLabel = translation.name;
                     return ariaLabel;
              }

              const loader = new Loader({
                     apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
                     version: "weekly",
              });

              loader.load().then(async (google) => {
                     const map = new google.maps.Map(mapRef.current, {
                            zoom: 8,
                            center: centerOfTheMap,
                            mapTypeControl: false,
                            zoomControl: false,
                            fullscreenControl: false,
                            streetViewControl: false,
                     });

                     map.setOptions({ styles: theme });

                     Object.keys(markersDetails).forEach(key => {
                            let marker = new google.maps.Marker({
                                   position: markersDetails[key].position,
                                   map,
                                   title: translations[language].about.map.markers.clickMe,
                            });

                            let infowindow = new google.maps.InfoWindow({
                                   content: generateContent(key),
                                   ariaLabel: generateAriaLabel(key),
                            });

                            marker.addListener("click", () => {
                                   map.setZoom(13);
                                   map.panTo(marker.getPosition());

                                   infowindow.open({
                                          anchor: marker,
                                          map,
                                   });

                                   google.maps.event.addListenerOnce(infowindow, 'domready', () => {
                                          document.querySelectorAll('#more-details-link').forEach((element) => {
                                                 element.addEventListener('click', (e) => {
                                                        e.preventDefault();
                                                        navigate('/about');
                                                 });
                                          });
                                   });
                            });
                     });

              });
       }, [language, centerOfTheMap, markersDetails, theme, navigate]);

       return <div ref={mapRef} className='' style={{ width: '100%', height: '500px' }} />;
}

export default withLanguage(GoogleMap);