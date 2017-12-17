import styled from 'styled-components'

export const TooltipStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .rectangle {
    background: #484848;
    border-radius: 3px;
    padding: 7px 11px;

    .value {
      font-family: 'Heebo';
      font-size: 15px;
      letter-spacing: 1.7px;
      color: #ffffff;
    }
  }

  .triangle {
    width: 4.32px;
    height: 4.32px;
    background: #484848;
    transform: translateY(-50%) rotate(45deg);
  }
`