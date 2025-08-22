import {ChangeEvent, Dispatch, forwardRef, SetStateAction} from 'react';
import './style.css';

// interface : Input Box 컴포넌트 Propperties
interface Props {
    label: string;
    type: 'text' | 'password';
    placeholder : string;
    value:string;
    setValue: Dispatch<SetStateAction<string>>
    error: boolean;

}

//  component: Input Box 컴포넌트 //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref)=> {

 


// state : properties   //

    const {label, type,placeholder, error, value} = props;
    const {setValue} = props;

    // event halnder : input 값 변경 이벤트 처리 함수
    const onChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
        const { value} = event.target;
        setValue(value);

    }

    return (
        <div className = 'inputbox'>
            <div className = 'inputbox-label'>{label}</div>
            <div className ={error ? 'inputbox-container-error' : 'inputbox-container' }>
                <input type={type} className = 'input' placeholder={placeholder} value={value} onChange={onChangeHanlder}/>
                <div className ='icon-button'>
                    <div className = 'icon eye-light-off-icon'></div>
                </div>
            </div>
            <div className = 'inputbox-message'>{'비밀번호는 8자 이상 입력해주세요!'}</div>

        </div>

    )

} ) ;

export default InputBox;

