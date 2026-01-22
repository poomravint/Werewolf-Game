import { use, useState } from "react";
import "./Dmbox.css";
import { getRoleClass } from "./roleUtils";
import { getThaiName } from "./roleUtils";
import SequencePopup from "./SequencePopup";


const Dmbox = ({ result, showdmbutton }) => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [buttonResetStatus, setButtonResetStatus] = useState(false);
  const [status, setStatus] = useState({});
  const [openpopup, setOpenPopup] = useState(false);

  const toggleButtonStatus = () => {
    setButtonStatus(!buttonStatus);
    setButtonResetStatus(!buttonResetStatus);
  };

  const toggleStatus = (index, key) => {
    setStatus((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [key]: !prev[index]?.[key],
      },
    }));
    // console.log(status);
  };

  const resetAll = () => {
    setStatus({});
  };

  const resetStatus = () => {
    setStatus((prev) => {
      const newStatus = {};

      Object.keys(prev).forEach((index) => {
        newStatus[index] = {
          ...prev[index],
          target: false,
          silenced: false,
          protected: false,
        };
      });

      return newStatus;
    });
  };

  return (
    <>
      {showdmbutton && (
        <div className="button-bar">
          {buttonResetStatus && (
            <button className="resetStatus-button" onClick={resetStatus}>
              Reset Status
            </button>
          )}

          <button className="show-button" onClick={toggleButtonStatus}>
            {buttonStatus === false ? "Hide Role" : "Show Role"}
          </button>

          {buttonResetStatus && (
            <button className="sequence-button" onClick={() => setOpenPopup(true)}>
              Role Sequence
            </button>
          )}
        </div>
      )}
      <div className="dm-box">
        {buttonStatus && (
          <table className="dm-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Dead</th>
                <th>Target</th>
                <th>Silenced</th>
                <th>Protected</th>
                <th>Lover</th>
              </tr>
            </thead>

            <tbody>
              {result.map((player, index) => (
                <tr
                  className={status[index]?.dead ? "row-dead" : ""}
                  key={index}
                >
                  <td className={`col-name ${getRoleClass(player.role)}`}>
                    {player.name}

                    {status[index]?.dead && (
                      <span className="status-icon dead">☠️</span>
                    )}
                    {status[index]?.target && (
                      <span className="status-icon target">🩸</span>
                    )}
                    {status[index]?.silenced && (
                      <span className="status-icon silenced">🔇</span>
                    )}
                    {status[index]?.protected && (
                      <span className="status-icon protected">🛡️</span>
                    )}
                    {status[index]?.lover && (
                      <span className="status-icon lover">❤️</span>
                    )}
                  </td>
                  <td className="col-role">{player.role}<br/>({getThaiName(player.role)})</td>
                  <td className="col-flag">
                    ☠️
                    <input
                      className="dm-checkbox"
                      type="checkbox"
                      checked={status[index]?.dead || false}
                      onChange={() => toggleStatus(index, "dead")}
                    />
                  </td>
                  <td className="col-flag">
                    🩸
                    <input
                      className="dm-checkbox"
                      type="checkbox"
                      checked={status[index]?.target || false}
                      onChange={() => toggleStatus(index, "target")}
                    />
                  </td>
                  <td className="col-flag">
                    🔇
                    <input
                      className="dm-checkbox"
                      type="checkbox"
                      checked={status[index]?.silenced || false}
                      onChange={() => toggleStatus(index, "silenced")}
                    />
                  </td>
                  <td className="col-flag">
                    🛡️
                    <input
                      className="dm-checkbox"
                      type="checkbox"
                      checked={status[index]?.protected || false}
                      onChange={() => toggleStatus(index, "protected")}
                    />
                  </td>
                  <td className="col-flag">
                    ❤️
                    <input
                      className="dm-checkbox"
                      type="checkbox"
                      checked={status[index]?.lover || false}
                      onChange={() => toggleStatus(index, "lover")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {buttonResetStatus && showdmbutton && (
        <button className="reset-button" onClick={resetAll}>
          All Reset
        </button>
      )}
      {openpopup && (
        <SequencePopup onClose={() => setOpenPopup(false)} result={result} />
      )}
    </>
  );
};

export default Dmbox;
