import { useDispatch, useSelector } from 'react-redux'

import styles from './Accordeon.module.scss'

import { ReactComponent as CloseIcon } from '../../assets/icons/plus.svg'

import { setAccordeonOpened, setAccordeonId } from '../../redux/slices/accordeonSlice';

const Accordeon = () => {

    const isAccordeonOpened = useSelector((state) => state.accordeon.isAccordeonOpened);
    const accordeonId = useSelector((state) => state.accordeon.accordeonId);
    const dispatch = useDispatch();

    const handleAccordeonOpen = (id) => {
        console.log(!isAccordeonOpened);
        console.log(accordeonId);
        console.log(id);
        dispatch(setAccordeonOpened(!isAccordeonOpened));
        dispatch(setAccordeonId(id));

    }


    return (
        <>
            {
                [...Array(4)].map((_, index) => (
                    <div className={styles.accordeon} key={index}>
                        <div className={styles.accordeon__default} onClick={() => handleAccordeonOpen(index)}>
                            <h3>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut aliquam?
                            </h3>
                            <button
                                onClick={() => handleAccordeonOpen(index)}
                            >
                                <CloseIcon className={`${styles.close} ${((accordeonId === index) && isAccordeonOpened) ? styles.close__active : ''}`} />
                            </button>
                        </div>
                        {
                            ((accordeonId === index) && isAccordeonOpened) &&
                            <div className={styles.accordeon__opened}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis, lectus magna fringilla urna,
                                    porttitor rhoncus
                                </p>
                            </div>
                        }
                    </div>
                ))
            }
        </>

    )
}

export default Accordeon
