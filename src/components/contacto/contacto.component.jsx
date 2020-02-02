import React from 'react'

import './contacto.styles.scss'

export default function Contacto() {
  return (
    <div id="Contacto">
      <div className="wrapper">
        <h2>CONTACTANOS</h2>
        <form id="contact-form">
          <div className="messages"></div>
          <fieldset className="form-group">
            <label className="sr-only" htmlFor="nombre">
              Nombre y apellido
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="nombre"
              name="nombre"
              placeholder="Nombre y Apellido *"
              required="required"
            />
          </fieldset>
          <div className="row">
            <fieldset className="form-group">
              <div className="col-sm-6">
                <label className="sr-only" htmlFor="mail">
                  Tu email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="mail"
                  name="mail"
                  placeholder="E-mail *"
                  required="required"
                />
              </div>
              <div className="col-sm-6">
                <label className="sr-only" htmlFor="tel">
                  Tu Telefono
                </label>
                <input
                  type="tel"
                  className="form-control form-control-lg col-sm-6"
                  id="tel"
                  name="tel"
                  placeholder="Teléfono"
                />
              </div>
            </fieldset>
          </div>
          <fieldset className="form-group">
            <label className="sr-only" htmlFor="mensaje">
              Escribe aqui tu mensaje
            </label>
            <textarea
              className="form-control form-control-lg"
              id="mensaje"
              name="mensaje"
              rows="3"
              placeholder="Mensaje *"
              required="required"
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="btn btn-secondary-outline btn-lg btn-block btn-send"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
