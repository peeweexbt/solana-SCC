<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solana Social Credit Score</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            min-height: 100vh;
            color: white;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 0;
        }

        .logo {
            width: 120px;
            height: 120px;
            margin: 0 auto 20px;
            position: relative;
            animation: float 3s ease-in-out infinite;
        }

        .solana-mascot {
            width: 100%;
            height: 100%;
            position: relative;
            background: radial-gradient(circle at 40% 30%, #FFCC44, #FF9922);
            border-radius: 50%;
            box-shadow: 0 10px 30px rgba(255, 165, 0, 0.4);
            overflow: visible;
        }

        .mascot-hat {
            position: absolute;
            top: -18px;
            left: 50%;
            transform: translateX(-50%);
            width: 105px;
            height: 48px;
            background: linear-gradient(145deg, #0f0f0f, #2a2a2a);
            border-radius: 52px 52px 25px 25px;
            border: 2px solid #333;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
        }

        .solana-logo {
            position: absolute;
            top: 22px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 6px;
            color: #f0f0f0;
            font-weight: 900;
            letter-spacing: 1px;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }

        .solana-bars {
            position: absolute;
            top: 6px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 1px;
            flex-direction: column;
        }

        .bar1 { 
            width: 22px; 
            height: 3px; 
            background: linear-gradient(90deg, #00d4ff 0%, #40e0d0 100%); 
            border-radius: 2px; 
            margin-bottom: 1px;
        }
        .bar2 { 
            width: 20px; 
            height: 3px; 
            background: linear-gradient(90deg, #9945ff 0%, #bb6bd9 100%); 
            border-radius: 2px; 
            margin-bottom: 1px;
            margin-left: 1px;
        }
        .bar3 { 
            width: 18px; 
            height: 3px; 
            background: linear-gradient(90deg, #f044ff 0%, #ff6b9d 100%); 
            border-radius: 2px;
            margin-left: 2px;
        }

        .mascot-face {
            position: absolute;
            top: 32px;
            left: 50%;
            transform: translateX(-50%);
            width: 85px;
            height: 65px;
        }

        .eye {
            position: absolute;
            width: 1px;
            height: 4px;
            background: #111;
            border-radius: 0.5px;
        }

        .eye-left { 
            top: 18px; 
            left: 28px; 
            transform: rotate(-25deg);
            box-shadow: 0 0 1px rgba(0,0,0,0.3);
        }
        .eye-right { 
            top: 18px; 
            right: 28px; 
            transform: rotate(25deg);
            box-shadow: 0 0 1px rgba(0,0,0,0.3);
        }

        .mouth {
            position: absolute;
            top: 42px;
            left: 50%;
            transform: translateX(-50%);
            width: 22px;
            height: 10px;
            border: 2px solid #222;
            border-top: none;
            border-radius: 0 0 12px 12px;
            background: rgba(0, 0, 0, 0.1);
        }

        .thumb {
            position: absolute;
            top: 38px;
            left: -32px;
            width: 26px;
            height: 32px;
            background: radial-gradient(circle at 40% 30%, #FFCC44, #FF9922);
            border-radius: 13px;
            transform: rotate(-12deg);
            box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.25);
        }

        .thumb-tip {
            position: absolute;
            top: -12px;
            left: 7px;
            width: 12px;
            height: 18px;
            background: radial-gradient(circle at 40% 30%, #FFCC44, #FF9922);
            border-radius: 8px 8px 4px 4px;
        }

        .mustache {
            position: absolute;
            top: 32px;
            left: 50%;
            transform: translateX(-50%);
            width: 18px;
            height: 2px;
            background: #1a1a1a;
            border-radius: 1px;
        }

        .mustache::before {
            content: '';
            position: absolute;
            left: -6px;
            top: 0;
            width: 10px;
            height: 2px;
            background: #1a1a1a;
            border-radius: 1px 0 0 1px;
            transform: rotate(15deg);
        }

        .mustache::after {
            content: '';
            position: absolute;
            right: -6px;
            top: 0;
            width: 10px;
            height: 2px;
            background: #1a1a1a;
            border-radius: 0 1px 1px 0;
            transform: rotate(-15deg);
        }

        .beard {
            position: absolute;
            bottom: 12px;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 32px;
            background: linear-gradient(180deg, #1a1a1a 0%, #2d5016 70%, #3a6b1c 100%);
            border-radius: 1px;
        }

        .beard::before {
            content: '';
            position: absolute;
            bottom: -6px;
            left: -5px;
            width: 12px;
            height: 12px;
            background: radial-gradient(circle, #2d5016 0%, #3a6b1c 70%, #1a3009 100%);
            border-radius: 50%;
            border: 1px solid #0f1505;
        }

        .cheek-lines {
            position: absolute;
            top: 22px;
            left: 50%;
            transform: translateX(-50%);
            width: 70px;
            height: 35px;
        }

        .cheek-line {
            position: absolute;
            width: 6px;
            height: 0.5px;
            background: rgba(0, 0, 0, 0.15);
            border-radius: 0.5px;
        }

        .cheek-line.left1 { top: 12px; left: 18px; transform: rotate(-30deg); }
        .cheek-line.left2 { top: 16px; left: 16px; transform: rotate(-20deg); }
        .cheek-line.right1 { top: 12px; right: 18px; transform: rotate(30deg); }
        .cheek-line.right2 { top: 16px; right: 16px; transform: rotate(20deg); }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 30px;
        }

        .search-container {
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        #walletInput {
            flex: 1;
            padding: 15px 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 16px;
            background: rgba(0, 0, 0, 0.3);
            color: white;
            outline: none;
            transition: all 0.3s ease;
        }

        #walletInput::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        #walletInput:focus {
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(64, 224, 208, 0.4);
            border-color: rgba(64, 224, 208, 0.6);
        }

        .analyze-btn {
            padding: 15px 30px;
            background: linear-gradient(45deg, #40e0d0, #9d4edd);
            border: none;
            border-radius: 50px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 16px;
        }

        .analyze-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .analyze-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .loading {
            text-align: center;
            margin: 20px 0;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .results {
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            display: none;
        }

        .score-display {
            text-align: center;
            margin-bottom: 30px;
        }

        .score-number {
            font-size: 4rem;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .score-excellent { color: #2ecc71; }
        .score-good { color: #f39c12; }
        .score-average { color: #e67e22; }
        .score-poor { color: #e74c3c; }

        .score-label {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .score-description {
            font-size: 1rem;
            opacity: 0.8;
        }

        .metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .metric {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
        }

        .metric-value {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .metric-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .share-container {
            text-align: center;
            margin-top: 30px;
        }

        .share-btn {
            background: #1da1f2;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .share-btn:hover {
            background: #0d8bd9;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .example-wallets {
            margin-top: 20px;
            text-align: center;
        }

        .example-wallet {
            display: inline-block;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 8px 15px;
            margin: 5px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }

        .example-wallet:hover {
            background: rgba(64, 224, 208, 0.2);
            border-color: rgba(64, 224, 208, 0.4);
            transform: translateY(-1px);
        }

        .footer {
            text-align: center;
            margin-top: 40px;
            opacity: 0.7;
            font-size: 0.9rem;
        }

        .leaderboard {
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            margin: 30px 0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .leaderboard h2 {
            text-align: center;
            margin-bottom: 25px;
            font-size: 2rem;
            background: linear-gradient(45deg, #40e0d0, #9d4edd);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .leaderboard-item {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            margin: 10px 0;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }

        .leaderboard-item:hover {
            background: rgba(64, 224, 208, 0.1);
            border-color: rgba(64, 224, 208, 0.3);
            transform: translateX(5px);
        }

        .leaderboard-item.rank-1 { border-left-color: #ffd700; }
        .leaderboard-item.rank-2 { border-left-color: #c0c0c0; }
        .leaderboard-item.rank-3 { border-left-color: #cd7f32; }

        .rank {
            font-size: 1.5rem;
            font-weight: bold;
            margin-right: 20px;
            min-width: 40px;
            text-align: center;
        }

        .rank-1 .rank { color: #ffd700; }
        .rank-2 .rank { color: #c0c0c0; }
        .rank-3 .rank { color: #cd7f32; }

        .wallet-info {
            flex: 1;
            margin-right: 20px;
        }

        .wallet-address {
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 5px;
        }

        .wallet-label {
            font-weight: bold;
            font-size: 1rem;
        }

        .leaderboard-score {
            font-size: 1.8rem;
            font-weight: bold;
            text-align: right;
        }

        .leaderboard-score.excellent { color: #2ecc71; }
        .leaderboard-score.good { color: #f39c12; }

        .crown {
            margin-left: 10px;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <div class="solana-mascot">
                    <div class="mascot-hat">
                        <div class="solana-bars">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                        <div class="solana-logo">SOLANA</div>
                    </div>
                    <div class="mascot-face">
                        <div class="cheek-lines">
                            <div class="cheek-line left1"></div>
                            <div class="cheek-line left2"></div>
                            <div class="cheek-line right1"></div>
                            <div class="cheek-line right2"></div>
                        </div>
                        <div class="eye eye-left"></div>
                        <div class="eye eye-right"></div>
                        <div class="mustache"></div>
                        <div class="mouth"></div>
                    </div>
                    <div class="thumb">
                        <div class="thumb-tip"></div>
                    </div>
                    <div class="beard"></div>
                </div>
            </div>
            <h1>Solana Social Credit Score</h1>
            <p class="subtitle">Are you a jeet peasant or a tasteful trader? 🤔💎</p>
        </div>

        <div class="search-container">
            <div class="input-group">
                <input type="text" id="walletInput" placeholder="Enter Solana wallet address..." />
                <button class="analyze-btn" onclick="analyzeWallet()">Analyze</button>
            </div>
            
            <div class="example-wallets">
                <p>Try these example wallets:</p>
                <div class="example-wallet" onclick="setExampleWallet('9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM')">Diamond Hands</div>
                <div class="example-wallet" onclick="setExampleWallet('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1')">Paper Hands</div>
                <div class="example-wallet" onclick="setExampleWallet('BrGXTCpoD2vKmj3oTyC6m5W9JzM7L4X8n5Y4dQ7pRzJK')">Degen Trader</div>
            </div>
        </div>

        <div class="loading" id="loadingIndicator" style="display: none;">
            <div class="spinner"></div>
            <p>Analyzing wallet behavior...</p>
        </div>

        <div class="results" id="resultsContainer">
            <div class="score-display">
                <div class="score-number" id="scoreNumber">850</div>
                <div class="score-label" id="scoreLabel">Diamond Hands</div>
                <div class="score-description" id="scoreDescription">This wallet shows exceptional holding behavior with strong conviction trades</div>
            </div>

            <div class="metrics">
                <div class="metric">
                    <div class="metric-value" id="holdingStrength">92%</div>
                    <div class="metric-label">Holding Strength</div>
                </div>
                <div class="metric">
                    <div class="metric-value" id="jeetLevel">45</div>
                    <div class="metric-label">Jeet Lvl</div>
                </div>
                <div class="metric">
                    <div class="metric-value" id="riskScore">7.2</div>
                    <div class="metric-label">Risk Score</div>
                </div>
            </div>

            <div class="share-container">
                <button class="share-btn" onclick="shareOnTwitter()">Share on Twitter 🐦</button>
            </div>
        </div>

        <div class="footer">
            <p>🔮 Social credit scores are for entertainment purposes only. Not financial advice.</p>
        </div>
    </div>

    <script>
        let currentWalletAddress = '';
        let currentScore = 0;
        let currentLabel = '';

        function setExampleWallet(address) {
            document.getElementById('walletInput').value = address;
        }

        function analyzeWallet() {
            const walletInput = document.getElementById('walletInput');
            const address = walletInput.value.trim();
            
            if (!address) {
                alert('Please enter a wallet address');
                return;
            }

            if (!isValidSolanaAddress(address)) {
                alert('Please enter a valid Solana wallet address');
                return;
            }

            currentWalletAddress = address;
            showLoading();
            
            // Simulate API call with timeout
            setTimeout(() => {
                const mockData = generateMockAnalysis(address);
                displayResults(mockData);
                hideLoading();
            }, 2000 + Math.random() * 1000);
        }

        function isValidSolanaAddress(address) {
            // Basic validation for Solana address format
            return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
        }

        function generateMockAnalysis(address) {
            // Generate deterministic but varied results based on address
            const hash = hashCode(address);
            const random = seededRandom(hash);
            
            const baseScore = 300 + Math.floor(random() * 700);
            const holdingStrength = Math.floor(20 + random() * 80);
            const jeetLevel = Math.floor(1 + random() * 100);
            const riskScore = (1 + random() * 9).toFixed(1);
            
            let label, description, scoreClass;
            
            if (baseScore >= 900) {
                label = "Diamond Deity 👑💎";
                description = "Legendary status achieved - hands forged from pure diamond";
                scoreClass = "score-excellent";
            } else if (baseScore >= 850) {
                label = "Chad Hodler 💪😎";
                description = "Absolute unit with titanium grip strength";
                scoreClass = "score-excellent";
            } else if (baseScore >= 800) {
                label = "Diamond Hands 💎🙌";
                description = "Exceptional holding behavior with unshakeable conviction";
                scoreClass = "score-excellent";
            } else if (baseScore >= 750) {
                label = "Steady Eddie 🤝📈";
                description = "Reliable holder with strong fundamentals";
                scoreClass = "score-good";
            } else if (baseScore >= 700) {
                label = "Tasteful Trader 🎩📊";
                description = "Sophisticated approach with calculated moves";
                scoreClass = "score-good";
            } else if (baseScore >= 650) {
                label = "Average Joe 👨‍💼";
                description = "Middle-of-the-road trading with room to improve";
                scoreClass = "score-good";
            } else if (baseScore >= 600) {
                label = "Cautious Carl 😰📉";
                description = "Plays it safe but misses some opportunities";
                scoreClass = "score-average";
            } else if (baseScore >= 550) {
                label = "Swing Trader 🎢";
                description = "Lives for the volatility - for better or worse";
                scoreClass = "score-average";
            } else if (baseScore >= 500) {
                label = "Impulse Buyer 🛒💸";
                description = "FOMO kicks in a little too often";
                scoreClass = "score-average";
            } else if (baseScore >= 450) {
                label = "Nervous Nelly 😬";
                description = "Anxiety-driven trades lead to suboptimal results";
                scoreClass = "score-poor";
            } else if (baseScore >= 400) {
                label = "Paper Hands 📄🤲";
                description = "Folds under pressure faster than origami";
                scoreClass = "score-poor";
            } else if (baseScore >= 350) {
                label = "Panic Seller 😱💔";
                description = "First sign of red and they're out the door";
                scoreClass = "score-poor";
            } else {
                label = "Jeet Peasant 🤡💩";
                description = "Professional exit liquidity provider - ngmi";
                scoreClass = "score-poor";
            }
            
            return {
                score: baseScore,
                label,
                description,
                scoreClass,
                holdingStrength: holdingStrength + '%',
                jeetLevel,
                riskScore
            };
        }

        function hashCode(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return Math.abs(hash);
        }

        function seededRandom(seed) {
            return function() {
                seed = (seed * 9301 + 49297) % 233280;
                return seed / 233280;
            };
        }

        function showLoading() {
            document.getElementById('loadingIndicator').style.display = 'block';
            document.getElementById('resultsContainer').style.display = 'none';
            document.querySelector('.analyze-btn').disabled = true;
        }

        function hideLoading() {
            document.getElementById('loadingIndicator').style.display = 'none';
            document.querySelector('.analyze-btn').disabled = false;
        }

        function displayResults(data) {
            currentScore = data.score;
            currentLabel = data.label;
            
            // Animate score reveal
            const scoreElement = document.getElementById('scoreNumber');
            scoreElement.textContent = '0';
            scoreElement.className = 'score-number ' + data.scoreClass + ' animate';
            
            // Animate score counting up
            let start = 0;
            const end = data.score;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    scoreElement.textContent = end;
                    clearInterval(timer);
                } else {
                    scoreElement.textContent = Math.floor(start);
                }
            }, 16);
            
            document.getElementById('scoreLabel').textContent = data.label;
            document.getElementById('scoreDescription').textContent = data.description;
            
            // Animate metrics with stagger
            const metrics = [
                { id: 'holdingStrength', value: data.holdingStrength },
                { id: 'jeetLevel', value: data.jeetLevel },
                { id: 'riskScore', value: data.riskScore }
            ];
            
            metrics.forEach((metric, index) => {
                setTimeout(() => {
                    const element = document.getElementById(metric.id);
                    element.className = 'metric-value animate';
                    element.textContent = metric.value;
                }, index * 200);
            });
            
            document.getElementById('resultsContainer').style.display = 'block';
            document.getElementById('resultsContainer').scrollIntoView({ behavior: 'smooth' });
        }

        function shareOnTwitter() {
            const tweetText = `🔥 My Solana Social Credit Score: ${currentScore}/1000 - ${currentLabel}!\n\n💎 Check your wallet's diamond hand status at Solana Social Credit Score\n\n#Solana #DiamondHands #SocialCredit #SOL`;
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
            window.open(url, '_blank');
        }

        // Handle Enter key in input
        document.getElementById('walletInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                analyzeWallet();
            }
        });
    </script>
</body>
</html>
