import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className="footer bg-zkforest">
            <h4>
                This website is community maintained and{" "}
                <a
                    href="https://github.com/dfarchon/zkforest.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "text-decoration" : "underline"}}
                >
                    open source
                </a>
                .
            </h4>
        </div>
    );
}
