import React from "react";

const ActionPlan = () => {
    return (
        <>
            <div className="col col-md-12 m-0">
                <div className="action-table p-3">
                    <form className="py-2">
                        <div className="d-flex justify-content-between">
                            <label className="form-label px-2">
                                <p>Que:</p>
                                <input id="que" type="text" placeholder="Introducir" className="form-control label-options" />
                            </label>
                            <label className="form-label px-2">
                                <p>Quien:</p>
                                <input type="text" placeholder="Introducir" className="form-control label-options" />
                            </label>
                            <label className="form-label px-2">
                                <p>Fecha inicio</p>
                                <input type="date" />
                            </label>
                            <label className="form-label px-2">
                                <p>Fecha de Fin</p>
                                <input type="date" />
                            </label>
                        </div>
                        <div className="py-2">
                            <p>Accion Especial</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" nombre="action" />
                                <label class="form-check-label" for="inlineCheckbox1"> NO </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" nombre="action" />
                                <label class="form-check-label" for="inlineCheckbox2"> SI </label>
                            </div>
                            <label className="form-label ps-5">
                                <p>¿Porque?</p>
                                <input id="que" type="text" placeholder="Introducir" className="form-control label-options" />
                            </label>
                        </div>
                        <div className="py-2">
                            <p>Causa</p>
                            <div className="d-flex justify-content-between">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">1 ¿Por que?</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2">2 ¿Por que?</label>
                                </div><div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">3 ¿Por que?</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2">4 ¿Por que?</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2">5 ¿Por que?</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
            <button className="btn-dark-blue-add mb-3 me-5"><i class="fas fa-plus-circle"></i>Add</button>
        </>
    )
}

export default ActionPlan;