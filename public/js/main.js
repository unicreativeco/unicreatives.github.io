getCreatives();
let list = [];

function filter(btn) {

    const active = 'f-act'
    if ($(`#${btn}-c`).attr('class').split(/\s+/).includes(active)) {
        $(`#${btn}-c`).removeClass(active);
        $(`#${btn}-i`).attr('stroke', '#FFF');

        list.map((role, i) => {
            if (role === btn) {
                list.splice(i, 1);
            }
        });

        getCreatives(list);

        $(`#fl-${btn}`).remove();

    } else {
        $(`#${btn}-c`).addClass(active);
        $(`#${btn}-i`).attr('stroke', '#1B1F23');

        list.push(btn);
        getCreatives(list);

        $(`#filter-label`).append(` <span id="fl-${btn}" class="badge badge-pill filter-badge">${btn.toUpperCase()}</span>`);
    }
}

function getCreatives(roles = []) {

    let filter = {};

    if (roles.length > 0) {
        filter = { roles: roles.join(',') };
    }

    jQuery.get("api/creatives", filter, data => {

        $("#creatives").empty();

        data.map(card => {
            let socialsHTML = ``;

            Object.keys(card.social).map(icon => {
                if (icon in socialsDict) {
                    socialsHTML += socialsDict[icon];
                }
            })

            let rolesHTML = ``;
            let circleRight = 5;
            let connectRight = circleRight + 20;
            card.roles.map((role, i) => {
                rolesHTML += `<span class="role-circle" style="right:${circleRight}px;">
                                <svg class="role-icon" viewBox="0 0 16 16" stroke="#F28CB0" fill="none" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round">
                                    ${rolesDict[role]}
                                </svg>
                            </span>`;

                if (i !== card.roles.length - 1) {
                    rolesHTML += `<span class="role-connect" style="right:${connectRight}px;"></span>`;
                }

                circleRight += 30;
                connectRight += 30;
            })

            let html =
                `<div class="card border-0 round" style="width: 18rem;">
            <div id="${card._id}" style="background-image:
            linear-gradient(to bottom, rgba(245, 245, 245, 0), rgba(27, 31, 35, 1)),
            url('${card.pic}');z-index:0" class="card-img-top round-top pic"></div>

            ${rolesHTML}

              <div class="card-body p-0 bg-uni text-white">
              <div style="height: 12px"></div>
              <h3 class="card-title text-white m-0">${card.name}</h3>
              <h6 class="card-text text-handle mb-3">${card.tag}</h6>
              <h6 class="card-text text-desc mb-5">${card.bio}</h6>
              <div>
                  <svg class="p-icon" viewBox="0 0 16 16" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3304 0.711112C10.2817 0.701998 9.27125 1.10518 8.51684 1.83381L8.5168 1.83376L8.50996 1.84056L7.36329 2.98056C7.10218 3.24015 7.10095 3.66225 7.36054 3.92336C7.62013 4.18447 8.04224 4.1857 8.30335 3.92611L9.4464 2.7897C9.94899 2.30594 10.6212 2.03833 11.3189 2.04439C12.0181 2.05047 12.6869 2.33092 13.1813 2.82534C13.6757 3.31976 13.9562 3.9886 13.9623 4.68779C13.9683 5.38516 13.7009 6.05708 13.2176 6.55959L11.2219 8.55526L11.2218 8.55535C10.9515 8.82578 10.6262 9.03492 10.2679 9.16856C9.90961 9.30221 9.52678 9.35724 9.14538 9.32992C8.76397 9.30261 8.39289 9.19359 8.05732 9.01025C7.72175 8.82691 7.42954 8.57355 7.20049 8.26735C6.97996 7.97251 6.56217 7.91228 6.26733 8.13282C5.9725 8.35336 5.91227 8.77115 6.13281 9.06599C6.47637 9.52529 6.91469 9.90533 7.41805 10.1803C7.9214 10.4553 8.47801 10.6189 9.05013 10.6599C9.62224 10.7008 10.1965 10.6183 10.7339 10.4178C11.2713 10.2173 11.7593 9.90364 12.1648 9.49799L14.1647 7.49807L14.1648 7.49814L14.1728 7.48981C14.9015 6.7354 15.3047 5.72499 15.2955 4.6762C15.2864 3.62742 14.8658 2.62417 14.1241 1.88253C13.3825 1.1409 12.3792 0.720225 11.3304 0.711112ZM6.94983 5.34014C6.37772 5.29917 5.80348 5.38172 5.26608 5.58219C4.72871 5.78264 4.24073 6.09631 3.83524 6.50193L3.83515 6.50201L1.83524 8.50193L1.83517 8.50185L1.82712 8.51019C1.09848 9.2646 0.695307 10.275 0.704421 11.3238C0.713534 12.3726 1.13421 13.3758 1.87584 14.1175C2.61747 14.8591 3.62072 15.2798 4.66951 15.2889C5.7183 15.298 6.72871 14.8948 7.48312 14.1662L7.48319 14.1663L7.49138 14.1581L8.63138 13.0181C8.89173 12.7577 8.89173 12.3356 8.63138 12.0753C8.37103 11.8149 7.94892 11.8149 7.68857 12.0753L6.5529 13.2109C6.05039 13.6943 5.37847 13.9617 4.6811 13.9556C3.98191 13.9495 3.31307 13.6691 2.81865 13.1747C2.32423 12.6802 2.04378 12.0114 2.0377 11.3122C2.03164 10.6148 2.29901 9.94293 2.78237 9.44041L4.77805 7.44474L4.77813 7.44465C5.04847 7.17421 5.37381 6.96508 5.73208 6.83143C6.09035 6.69779 6.47318 6.64276 6.85458 6.67007C7.23599 6.69739 7.60707 6.80641 7.94264 6.98975C8.27821 7.17309 8.57042 7.42645 8.79947 7.73265C9.02 8.02748 9.43779 8.08771 9.73263 7.86717C10.0275 7.64664 10.0877 7.22885 9.86715 6.93401C9.52359 6.47471 9.08527 6.09467 8.58191 5.81966C8.07856 5.54465 7.52195 5.38112 6.94983 5.34014Z" fill="#959DA5"/>
                  </svg>
                  <a href="https://${card.site}" class="text-handle p-link" target="_blank">${card.site}</a>
              </div>
              <div>${socialsHTML}</div>
          </div>
          </div>`;
            $("#creatives").append(html);
        });
    });
}