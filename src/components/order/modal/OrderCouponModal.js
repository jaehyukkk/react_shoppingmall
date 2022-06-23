import React from "react";
import "./orderModal.scss";

const CouponModal = (props) => {
    const {open, close, header, onSubmit} = props;

    return(
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="clos" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className="submit" onClick={onSubmit}>
                            submit
                        </button>
                    </footer>
                </section>
            ): null}
        </div>
    );
}

export default CouponModal;