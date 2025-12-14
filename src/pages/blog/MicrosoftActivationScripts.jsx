import React from 'react';
import './BlogPost.css';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import thumbnail from '../../assets/mas-thumbnail.png';

const MicrosoftActivationScripts = () => {
    const navigate = useNavigate();

    return (
        <div className="blog-post-page section-padding">
            <div className="container blog-post-container">
                <button className="back-btn" onClick={() => navigate('/blog')}>
                    <ArrowLeft size={20} /> Quay lại Blog
                </button>

                <article className="blog-content-wrapper">
                    <header className="blog-header">
                        <span className="blog-category-tag">Software Tools</span>
                        <h1 className="blog-h1">Microsoft Activation Scripts (MAS)</h1>
                        <div className="blog-meta">
                            <span>December 14, 2025</span> • <span>Thầy Tín</span>
                        </div>
                        <div className="blog-featured-image-wrapper" style={{ marginTop: '24px', borderRadius: '12px', overflow: 'hidden' }}>
                            <img src={thumbnail} alt="Microsoft Activation Scripts" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </header>

                    <div className="blog-body">
                        <p className="lead">
                            "Open-source Windows and Office activator featuring HWID, Ohook, TSforge, and Online KMS activation methods, along with advanced troubleshooting."
                        </p>

                        <hr />

                        <h2>How to Activate Windows / Office / Extended Updates (ESU)?</h2>

                        <div className="method-card">
                            <h3>Method 1 - PowerShell ❤️</h3>
                            <div className="alert-box info">
                                <strong>Open PowerShell</strong><br />
                                Click the Start Menu, type PowerShell, then open it.
                            </div>

                            <p>Copy and paste the code below, then press enter.</p>

                            <p><strong>For Windows 8, 10, 11: 📌</strong></p>
                            <pre className="code-block">
                                <code>irm https://get.activated.win | iex</code>
                            </pre>

                            <p>If the above is blocked (by ISP/DNS), try this (needs updated Windows 10 or 11):</p>
                            <pre className="code-block">
                                <code>iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)</code>
                            </pre>

                            <p><strong>For Windows 7 and later:</strong></p>
                            <pre className="code-block">
                                <code>iex ((New-Object Net.WebClient).DownloadString('https://get.activated.win'))</code>
                            </pre>

                            <p><em>Script not launching❓ Use Method 2.</em><br />
                                The activation menu will appear. Choose the green-highlighted options to activate Windows or Office.</p>

                            <p><strong>Done!</strong></p>
                        </div>

                        <div className="method-card">
                            <h3>Method 2 - Traditional (Windows Vista and later)</h3>
                            <div className="alert-box info">
                                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                                    <li>Download the script: <a href="https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?path=/MAS/All-In-One-Version-KL/MAS_AIO.cmd&download=true" target="_blank" rel="noopener noreferrer"><strong>MAS_AIO.cmd</strong></a> or the <a href="https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?$format=zip" target="_blank" rel="noopener noreferrer">full ZIP</a>.</li>
                                    <li>Run the file named <strong>MAS_AIO.cmd</strong>.</li>
                                    <li>You will see the activation options. Follow the on-screen instructions.</li>
                                    <li>That's all.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="alert-box tip">
                            <strong>Tip:</strong> Some ISPs/DNS block access to our domains. You can bypass this by enabling DNS-over-HTTPS (DoH) in your browser.
                        </div>

                        <p>Having trouble❓ Connect with us here.<br />
                            To activate additional products such as Office for macOS, Visual Studio, RDS CALs, and Windows XP, check here.<br />
                            To run the scripts in unattended mode, check here.</p>

                        <div className="alert-box note">
                            <strong>Note:</strong><br />
                            The IRM command in PowerShell downloads a script from a specified URL, and the IEX command executes it.<br />
                            Always double-check the URL before executing the command and verify the source is trustworthy when manually downloading files.<br />
                            Be cautious, as some spread malware disguised as MAS by changing the URL in the IRM command.
                        </div>

                        <hr />

                        <h2>MAS Latest Release</h2>
                        <p><strong>Last Release - v3.9 (19-Nov-2025)</strong><br />
                            GitHub / Azure DevOps / Self-hosted Git</p>

                        <h2>Features</h2>
                        <ul>
                            <li><strong>HWID (Digital License)</strong> Method to Permanently Activate Windows</li>
                            <li><strong>Ohook</strong> Method to Permanently Activate Office</li>
                            <li><strong>TSforge</strong> Method to Permanently Activate Windows/ESU/Office</li>
                            <li><strong>Online KMS</strong> Method to Activate Windows/Office For 180 Days (Lifetime With Renewal Task)</li>
                            <li>Advanced Activation Troubleshooting</li>
                            <li>$OEM$ Folders For Preactivation</li>
                            <li>Change Windows Edition</li>
                            <li>Change Office Edition</li>
                            <li>Check Windows/Office Activation Status</li>
                            <li>Available in All In One and Separate Files Versions</li>
                            <li>Fully Open Source and Based on Batch Scripts</li>
                            <li>Fewer Antivirus Detections</li>
                        </ul>

                        <h2>Activations Summary</h2>
                        <div className="table-responsive">
                            <table className="blog-table">
                                <thead>
                                    <tr>
                                        <th>Activation Type</th>
                                        <th>Supported Product</th>
                                        <th>Activation Period</th>
                                        <th>Is Internet Needed?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HWID</td>
                                        <td>Windows 10-11</td>
                                        <td>Permanent</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Ohook</td>
                                        <td>Office</td>
                                        <td>Permanent</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>TSforge</td>
                                        <td>Windows / ESU / Office</td>
                                        <td>Permanent</td>
                                        <td>Yes, needed on build 26100 and later</td>
                                    </tr>
                                    <tr>
                                        <td>Online KMS</td>
                                        <td>Windows / Office</td>
                                        <td>180 Days. Lifetime With Renewal Task</td>
                                        <td>Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>For more details, use the respective activation details in Docs and comparison chart.<br />
                            To activate unsupported products such as Office on Mac, check here.</p>

                        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
                            Made with Love ❤️<br />
                            Nguồn: <a href="https://massgrave.dev/" target="_blank" rel="noopener noreferrer">https://massgrave.dev/</a>
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default MicrosoftActivationScripts;
