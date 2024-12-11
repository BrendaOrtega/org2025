export const Secuence = ({
  fill = "#19262A",
  className,
}: {
  fill?: string;
  className?: string;
}) => (
  <div className="svg-power-grid-wrapper w-embed -rotate-90 md:rotate-0">
    <svg
      className="svg-contiant-links"
      width="90%"
      height="406"
      viewBox="0 0 586 266"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="visible-paths">
        <path
          d="M584 129H70.7782C61.9417 129 54.7783 121.837 54.7783 113V66C54.7783 57.1634 47.6148 50 38.7783 50H2"
          stroke="#E4E7EB"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
        <path
          d="M584 129H70.7782C61.9417 129 54.7783 136.163 54.7783 145V192C54.7783 200.837 47.6148 208 38.7783 208H2"
          stroke="#E4E7EB"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
      </g>

      <g className="mask-bottom">
        <mask
          id="mask0_7_2"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="127"
          width="586"
          height="83"
        >
          <path
            d="M584 129H70.7782C61.9417 129 54.7783 136.163 54.7783 145V192C54.7783 200.837 47.6148 208 38.7783 208H2"
            stroke="#E4E7EB"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </mask>
        <g mask="url(#mask0_7_2)">
          <circle
            cx="-7.771056"
            cy="208"
            r="18"
            fill="#37AB93"
            fillOpacity="0.79"
            data-svg-origin="-25.85995101928711 208"
            transform="matrix(0.01319,-0.99991,0.99991,0.01319,-152.86053,116.18357)"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px;",
            }}
          ></circle>
        </g>
      </g>
      <g className="mask-top">
        <mask
          id="mask1_7_2"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="48"
          width="586"
          height="83"
        >
          <path
            d="M584 129H70.7782C61.9417 129 54.7783 121.837 54.7783 113V66C54.7783 57.1634 47.6148 50 38.7783 50H2"
            stroke="#E4E7EB"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </mask>
        <g mask="url(#mask1_7_2)">
          <circle
            cx="-7.771056"
            cy="50"
            r="18"
            fill="#37AB93"
            fill-opacity="0.79"
            data-svg-origin="-25.85995101928711 50"
            transform="matrix(0.01319,0.99991,-0.99991,0.01319,105.11625,138.41353)"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "0px 0px;",
            }}
          ></circle>
        </g>
      </g>
    </svg>
  </div>
);
