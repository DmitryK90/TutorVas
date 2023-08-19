import { connect } from 'react-redux'
import { incrementLikes, decrementLikes } from '../../redux/actions'

function Likes(props) {
    console.log(props)
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )// при клике запускается метож из mapDispatchToProps.
}

function mapStateToProps(state) { // тут получаем доступ к глобальному объекту state и может из него брать свойства, аналог прокидывания через props по всему дереву.
    console.log(state)
    const { likesReducer } = state // деструктуризация присваивания, она используется для извлечения свойства likesReducer из объекта state и присвоения его константной 
    // переменной с именем likesReducer. В данном случае объект state вероятно содержит несколько свойств, а код заинтересован именно в доступе к свойству likesReducer.
    // по итогу { likesReducer } = likes: 0.
    console.log(likesReducer)
    return {
        likes: likesReducer.likes // likes появится в props этого компонента, берётся из глобального state, в даннов случае при старте в initialState likes: 0.
    }
}

function mapDispatchToProps(dispatch) { // принимает метов dispatch.
    return {
        onIncrementLikes: () => dispatch(incrementLikes()), // этот метод залетает в props компонента, и создаём action из импорта. callback функция, и диспатчим action он передаёт его автоматически в reducer.,
        onDecrementLikes: () => dispatch(decrementLikes()) // этот метод залетает в props компонента,... вызов decrementLikes() возвращает объект {type: DECREMENT} и диспатчит его в Reducer.
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes); // в connect оборачиваем наш компонент Likes и на выходе получаем новый компонент с props из mapStateToProps.1