# 自作のタスク管理アプリ
タスクが増えてきて管理するのが大変になったので、自分で作ってみようと思い、今回作成に至りました。
まだまだ、追加したい機能があるので、随時アップデートする予定です。

## 使用言語

OS: Windows10\
Node.js: 20.12.2\
MySQL: Ver 8.0.36 for Win64 on x86_6\
Express: 4.19.2\
prisma: 5.13.0

## アプリ内容

ユーザーごとにタスクを管理して追加、編集ができるアプリケーションです。
デプロイはしていないので、使ってみたい場合は、clone して実行してください。
MySQLは別でインストールする必要があります。
以下に実行手順を記します。

## 実行手順
1. git cloneをする
2. `cd taskApp`でディレクトリを移動する
3. `npm install`で必要なモジュールをインストールする
4. ```npm start```でlocalhost:3000で起動する
5. .envファイルに以下を記述
  ```
  DATABASE_URL="mysql://root:{自分のパスワード}@localhost:3306/taskappdb"
  SECRET_KEY="適当な文字列"
  ```
5. ```prisma migrate dev --name initial```でマイグレーションを行う
6. ```prisma studio```でデータベースが起動してウィンドウが開く
7. 起動完了

## 実際のアプリ画面
![image](https://github.com/Valzaak/taskApp/assets/129035968/edd15fde-5570-4db6-a9b9-616da44cb4f5)
![image](https://github.com/Valzaak/taskApp/assets/129035968/c94d7c5a-7adf-4285-8ff4-e8b4f3293490)
![image](https://github.com/Valzaak/taskApp/assets/129035968/ba4a9f46-c6d2-4ade-9c0a-98be31b0a9d1)
![image](https://github.com/Valzaak/taskApp/assets/129035968/9a1d7c63-6196-4774-8e1d-0fa695586935)


