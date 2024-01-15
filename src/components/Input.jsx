import { Container, InputContainer } from 'components/styled/style'


const Input = ({ data, value, onChange }) => {
    
    return (
        <Container>
            {data.map((el, i) => (
                <InputContainer key={el.name}>
                    <label htmlFor={el.name}>{el.name}</label>
                    <input
                        type={el.type}
                        name={el.name}
                        value={value[i]}
                        onChange={onChange}
                        required
                    />
                </InputContainer>
            ))}
        </Container>
    )  
}

export default Input