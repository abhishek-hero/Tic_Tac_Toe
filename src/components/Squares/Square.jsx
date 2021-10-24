import "../Squares/square.css"

export const Square = ({ gameState, state, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick} className="square-btn">
                {state}
            </button>
        </div>
    )
}