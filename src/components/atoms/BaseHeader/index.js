import React from 'react'

import useWeather from 'hooks/useWeather';
import { isMobile } from 'helpers/Mobile';

import avatar from 'assets/images/avatar.png'
import './styles.scss';

const BaseHeader = () => {
    const { weather } = useWeather()

    return <div className="base-header-container">
        {isMobile &&
            <div className="base-header-title">
            </div>
        }
        {!isMobile &&
            <div className="base-header-title">
                <h5>Municipio</h5>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.58L4.57455 6L0 1.41L1.40832 0L7.40118 6L1.40832 12L0 10.58Z" fill="#787E8F" />
                </svg>
                <h5>Organismo</h5>
            </div>
        }
        <div className="base-header-counter">
            <h6>Presupuesto</h6>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10.58L4.57455 6L0 1.41L1.40832 0L7.40118 6L1.40832 12L0 10.58Z" />
            </svg>
            <h6>Configuración</h6>
            <form>
                <p>Ejercicio</p>
                <select>
                    <option>
                        2020
                    </option>
                </select>
                <button>
                    En Ejecución
                </button>
            </form>
        </div>
        {
            <div className="base-header-user">

                <div className="base-header-actions">

                    <div className='base-header-temp'>
                        <p>Min:</p><span>{weather?.daily?.apparent_temperature_min[0].toFixed(1)}°</span>
                        <p>Max:</p><span>{weather?.daily?.apparent_temperature_max[0].toFixed(1)}°</span>
                    </div>

                    <div className="base-header-actions-search">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="#12416F" />
                        </svg>
                    </div>
                    <div className="base-header-actions-notifications">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5641 16C7.46667 16 8.20513 15.2615 8.20513 14.359H4.92308C4.92308 15.2615 5.66154 16 6.5641 16ZM11.4872 11.0769V6.97436C11.4872 4.45538 10.1497 2.34667 7.79487 1.78872V1.23077C7.79487 0.549744 7.24513 0 6.5641 0C5.88308 0 5.33333 0.549744 5.33333 1.23077V1.78872C2.98667 2.34667 1.64103 4.44718 1.64103 6.97436V11.0769L0 12.7179V13.5385H13.1282V12.7179L11.4872 11.0769ZM9.84615 11.8974H3.28205V6.97436C3.28205 4.93949 4.52103 3.28205 6.5641 3.28205C8.60718 3.28205 9.84615 4.93949 9.84615 6.97436V11.8974Z" fill="#12416F" />
                        </svg>

                    </div>
                    <div className="base-header-actions-notifications">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.2 12.8H8.8V11.2H7.2V12.8ZM8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 3.2C6.232 3.2 4.8 4.632 4.8 6.4H6.4C6.4 5.52 7.12 4.8 8 4.8C8.88 4.8 9.6 5.52 9.6 6.4C9.6 8 7.2 7.8 7.2 10.4H8.8C8.8 8.6 11.2 8.4 11.2 6.4C11.2 4.632 9.768 3.2 8 3.2Z" fill="#12416F" />
                        </svg>
                    </div>
                    <div className="base-header-actions-logout">
                        <img src={avatar} alt='avatar'/>
                    </div>
                </div>
            </div>
        }
    </div>
}

export default BaseHeader;