title: Delphi常用小技巧
id: 839
categories:
  - 系统❤软件
date: 2010-03-19 10:31:01
tags:
---

<div id="_mcePaste"><span style="font-family: 宋体; line-height: 14px; font-size: 12px; color: #333333;">
<div>function GetKbStatus():string;
//返回当前键盘状态，包括NumLoce、Caps Lock、Insert
//每个状态信息占两个字符，顺序为:NumLoce、Caps Lock、Insert
//Copy Right 549@11:29 2003-7-22
var Status:string;
KeyStates:TKeyboardState;
begin
GetKeyboardState(KeyStates);
if Odd(KeyStates[VK_NUMLOCK])then
Status:='数字'
else
Status:='光标';
if Odd(KeyStates[VK_CAPITAL]) then
Status:=status+'大写'
else
Status:=status+'小写';
if Odd(KeyStates[VK_INSERT]) then
Status:=status+'插入'
else
Status:=status+'改写';
Result:=Status;
end;<!--more--></div>
<div></div>
<div>小技巧：
const ErrHead='操作出现错误，错误信息为：'+#13
try
...
except
on E: Exception do showmessage(ErrHead+E.Message+#13+'当前操作为：xxxxx');
end;
可以让用户看到更多的错误信息，有助于客户反馈程序错误。</div>
<div></div>
<div>俺写得比较菜的，但是经常用的就是：</div>
<div>//&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
//执行Sql
//输入参数：SqlString, ADOQuery
//类型：    string,    TADOQuery
procedure TMainForm.ExeSql(SqlString: string; ADOQuery: TADOQuery);
begin
with ADOQuery do
begin
Connection := DM.DBAccinfo;//这个是我的，可以添加用的connection
//或者用use也可以。
if Active then
Active := False;
Open;
SQL.Clear;
SQL.Add(SqlString);
ExecSQL;
Close;
end;
end;</div>
<div>可能大家都知道这个。不过，我见过的代码里面，</div>
<div>好像很少人这么来写这么独立出来一个过程。</div>
<div>这个保证我自己原创……</div>
<div>//Open Adoquery
//根据reallike(爱翔(只有lizzy可以叫其他人不能)) 的过程改编
//支持多行sql
//可根据需要自己修改成只支持单行sql的过程，或者exesql过程
//Delphi6下测试通过。
procedure OpenSql(SqlString: tstrings; ADOQuery: TADOQuery);
var i:integer;
begin
with ADOQuery do
begin
Close;
SQL.Clear;
for i:=0 to sqlstring.Count-1 do
SQL.Add(SqlString[i]);
try
Open;
except
on e:exception do showmessage('错误：信息如下'+#13+e.Message);
end;
end;
end;
这个是单行sql的
procedure OpenSql1(SqlString: string; ADOQuery: TADOQuery);
begin
with ADOQuery do
begin
Close;
SQL.Clear;
SQL.Add(SqlString);
try
Open;
except
on e:exception do showmessage('错误：信息如下'+#13+e.Message);
end;
end;
end;
嗬嗬，谢谢帮我修理这个东西。</div>
<div>不过你不使用Execsql吗？</div>
<div>我一般都在这个过程外面加try也就是引用他的地方。</div>
<div>也就是</div>
<div>Try
Exesql(sqlstring, Adoquery1)
except
//错误提示，乱七八糟的东西。
end
to: reallike(爱翔(只有lizzy可以叫其他人不能))
ExecSql的我也做了
//ExecSql Adoquery
//支持多行sql
//可根据需要自己修改成只支持单行sql的过程，或者exesql过程
//Delphi6下测试通过。
procedure ExeSql(SqlString: tstrings; ADOQuery: TADOQuery);
var i:integer;
begin
with ADOQuery do begin
Close;
SQL.Clear;
for i:=0 to sqlstring.Count-1 do
SQL.Add(SqlString[i]);
try
ExecSql;
except
on e:exception do showmessage('错误：信息如下'+#13+e.Message);
end;
end;
end;
//我觉得except放在哪里都一样，放在外面好一点，因为，你可以添加一些其他的调试信息
//你说呢？
//有没有人把执行单行和执行多行的这两个过程合并成一个，那样就好了。
我也来两个，可以根据自己的需要进行增删，不过是针对DBGridEh的：</div>
<div>//动态建立Col
procedure BuildCol(vFieldName: string; vCaption: string; vWidth: Integer; var
vGrid: TDBGridEh; iTag: Integer = 0;
FooterType: TFooterValueType = fvtNon; FooterText: string = '';
boolReadOnly: Boolean = True; vColor: TColor = clBtnFace);
var
cCol: TDBGridColumnEh;
cFooterCol: TColumnFooterEh;
begin
cCol := TDBGridColumnEh.Create(vGrid.Columns);
cCol.FieldName := vFieldName;
cCol.Width := vWidth;
cCol.Title.Caption := vCaption;
cCol.Title.Alignment := taCenter;
cCol.Title.Color := vColor;
cCol.ReadOnly := boolReadOnly;
//如果tag值为-1，则打印dbgrid时不打印该列
cCol.Tag := iTag;</div>
<div>if FooterType &lt;&gt; fvtNon then
begin
cFooterCol := cCol.Footers.Add;
cFooterCol.ValueType := FooterType;
if FooterType = fvtStaticText then
begin
vGrid.FooterRowCount := 1;
cFooterCol.Value := FooterText;
end;
//cCol.Footer.FieldName:=;
end;
end;</div>
<div>procedure TitleBtnClick(Sender: TObject; ACol: Integer;
Column: TColumnEh; cdsHelper: TClientDataSetHelper);
var
cdsTmp: TClientDataSet;
begin
with (Sender as TDBGridEh) do
begin
cdsTmp := (DataSource.DataSet as TClientDataSet);
if not cdsTmp.Active then Exit;
//设置当前行的排序方式
if Column.Title.SortMarker = smNoneEh then
begin
Column.Title.SortMarker := smUpEh;
cdsHelper.SortByField(Column.FieldName, soAscending);
end
else
if Column.Title.SortMarker = smUpEh then
begin
Column.Title.SortMarker := smDownEh;
cdsHelper.SortByField(Column.FieldName, soDescending);
end
else
begin
Column.Title.SortMarker := smNoneEh;
cdsHelper.SortByField(Column.FieldName, soNoSort);
end;
end;
end;</div>
<div>将DBGrid中各列的位置以及宽度记录入Ini文件，以及从Ini文件读取DBGrid中各列位置以及宽度的函数
procedure f_ReadIni(const Now_DBGrid:TDBGrid;Form_Name:String);
var
FilePath:String;
MyIniFile:Tinifile;
Grid_Name,Field_Name:String;
Width:integer;
i,j,n:integer;
Column:Array[0..100] of String;
Widths:Array[0..100] of integer;
begin
FilePath := ExtractFilePath(Application.ExeName);
MyIniFile:=TiniFile.Create(FilePath+'gsp.ini');
Grid_Name :=Form_Name+','+Now_DBGrid.Name;
n:= Now_DBGrid.Columns.Count-1 ;</div>
<div>for i:=0 to 100 do column[i]:='';
for i:=0 to n do
begin
Field_Name:=Now_DBGrid.Columns[i].FieldName;
j:=MyIniFile.ReadInteger(Grid_Name,Field_Name,i);
Column[j]:=Field_Name;
Widths[j] :=MyIniFile.ReadInteger(Grid_Name,Field_Name+'_Width',Now_DBGrid.Columns[i].Width);
end;</div>
<div>for i:=0 to n do
begin
Now_DBGrid.Columns[i].FieldName := Column[i];
Now_DBGrid.Columns[i].Width := Widths[i];
end;</div>
<div>MyIniFile.Destroy;
end;</div>
<div>procedure f_WriteIni(const Now_DBGrid:TDBGrid;Form_Name:String);
var
FilePath:String;
MyIniFile:Tinifile;
Grid_Name,Field_Name:String;
Width:Integer;
i:integer;
begin
FilePath := ExtractFilePath(Application.ExeName);
MyIniFile:=TiniFile.Create(FilePath+'gsp.ini');
Grid_Name :=Form_Name+','+Now_DBGrid.Name;</div>
<div>for i:=0 to Now_DBGrid.Columns.Count-1 do
begin
Field_Name := Now_DBGrid.Columns[i].FieldName;
Width := Now_DBGrid.Columns[i].Width;
MyIniFile.WriteInteger(Grid_Name,Field_Name,i);
MyIniFile.WriteInteger(Grid_Name,Field_Name+'_Width',Width);
end;</div>
<div>MyIniFile.Destroy;
end;</div>
<div></div>
<div>很久以前写得的，现在我都用类封装了。
unit MyFunc;</div>
<div>interface
uses
Windows, SysUtils, MMSystem, WinSvc, Registry;</div>
<div>function CopyStrLeft(ch: Char; str: string): string;
function CopyStrRight(ch: Char; str: string): string;
function GetSelfPath: string;
procedure HideTask(bHide: Boolean);
function SoundCardInstalled: Boolean;
function GetHostIP: String;
procedure DisableSvc(SvcName: string);
function GetRegisteredOwner: string;
function GetRegisteredOrganization: string;</div>
<div>implementation</div>
<div>function RegisterServiceProcess(dwProcessID, dwType: Integer): Integer; stdcall; external 'KERNEL32.DLL';</div>
<div>function CopyStrLeft(ch: Char; str: string): string;
begin
Result:= Copy(str, 1, Pos(ch, str)-1)
end;</div>
<div>function CopyStrRight(ch: Char; str: string): string;
begin
Result:= Copy(str, Pos(ch, str)+1, Length(str)-Pos(Ch, str)+1)
end;</div>
<div>function GetSelfPath: string;
begin
Result:= ExtractFilePath(ParamStr(0))
end;</div>
<div>procedure HideTask(bHide: Boolean);
begin
if bHide then RegisterServiceProcess(GetCurrentProcessID, 1)
else RegisterServiceProcess(GetCurrentProcessID, 0);
end;</div>
<div>function SoundCardInstalled: Boolean;
begin
Result:= WaveOutGetNumDevs &gt;0
end;</div>
<div>function GetHostIP: String;
type
TaPInAddr = Array[0..10] of PInAddr;
PaPInAddr = ^TaPInAddr;
var
phe: PHostEnt;
pptr: PaPInAddr;
Buffer: Array[0..63] of Char;
I: Integer;
GInitData: TWSAData;
begin
WSAStartup($101,GInitData);
GetHostName(Buffer,SizeOf(Buffer));
phe:= GetHostByName(buffer);
if phe = nil then Exit;
pPtr:= PaPInAddr(phe^.h_addr_list);
I:= 0;
Result:=inet_ntoa(pptr^[I]^);
WSACleanup;
end;</div>
<div>procedure DisableSvc(SvcName: string);
var
scMngr: THandle;
scSvc: THandle;
begin
scMngr:= OpenSCManager(nil, nil, sc_Manager_all_Access);
scSvc:= OpenService(scMngr, SvcName, SERVICE_CHANGE_CONFIG);
ChangeServiceConfig(scSvc,
SERVICE_NO_CHANGE,
SERVICE_DISABLED,
SERVICE_NO_CHANGE,
nil,nil,nil,nil,nil,nil,nil);
CloseServiceHandle(scSvc);
end;</div>
<div>function GetRegisteredOwner: string;
var
OSVersion: TOSVersionInfo;
sWinKey: string;
begin
OSVersion.dwOSVersionInfoSize := SizeOf(OSVersion);
GetVersionEx(OSVersion);
case OSVersion.dwPlatformID of
VER_PLATFORM_WIN32_WINDOWS: sWinKey := '\SOFTWARE\Microsoft\Windows\CurrentVersion';
VER_PLATFORM_WIN32_NT:      sWinKey := '\SOFTWARE\Microsoft\Windows NT\CurrentVersion';
end;
with TRegistry.Create do
try
RootKey := HKEY_LOCAL_MACHINE;
OpenKey(sWinKey, False);
Result := ReadString('RegisteredOwner');
finally
Free;
end;
end;</div>
<div>function GetRegisteredOrganization: string;
var
OSVersion: TOSVersionInfo;
sWinKey: string;
begin
OSVersion.dwOSVersionInfoSize := SizeOf(OSVersion);
GetVersionEx(OSVersion);
case OSVersion.dwPlatformID of
VER_PLATFORM_WIN32_WINDOWS: sWinKey := '\SOFTWARE\Microsoft\Windows\CurrentVersion';
VER_PLATFORM_WIN32_NT:      sWinKey := '\SOFTWARE\Microsoft\Windows NT\CurrentVersion';
end;
with TRegistry.Create do
try
RootKey := HKEY_LOCAL_MACHINE;
OpenKey(sWinKey, False);
Result := ReadString('RegisteredOrganization');
finally
Free;
end;
end;</div>
<div>
end.</div>
<div>先放几个</div>
<div>//删除某目录下所有指定扩展名文件
function DelFile(sDir,fExt: string): Boolean;
var
hFindFile: HWND;
FindFileData: WIN32_FIND_DATA;
sr: TSearchRec;
begin
sDir:= sDir + '\';
hFindFile:= FindFirstFile(pchar(sDir + fExt), FindFileData);
if hFindFile &lt;&gt; NULL then
begin
deletefile(sDir + FindFileData.cFileName);
while FindNextFile(hFindFile, FindFileData) &lt;&gt; FALSE do
deletefile(sDir + FindFileData.cFileName);
end;
sr.FindHandle:= hFindFile;
FindClose(sr);
end;</div>
<div>//延时
procedure mDelay(MSecs: DWORD);
var
BeginTime: DWORD;
begin
BeginTime := GetTickCount;
repeat
Application.ProcessMessages;
until GetTickCount - BeginTime &gt;= MSecs;
end;</div>
<div>//格式化浮点型
function my_FormatFloat(r: Real; u: Integer): Real;
var
vStr : String;
I : Integer;
begin
if u &lt;= 0 then
Result := r
else
begin
vStr := '0';
for I := 1 to u - 1 do
vStr := vStr + '0';
vStr := '0.' + vStr;
Result := StrToFloat(FormatFloat(vStr, r));
end;
end;</div>
<div>//得到某字符串中指定位置的子串
//如get_substr('aa##bb##cc##dd','##',3)返回'cc'
function get_substr(s_str,d_str:string;po:integer):string; //s_str大字符串，d_str分隔符,po位置
var
i,j,k:integer;
begin
result:='';
if po&lt;1 then
exit;
s_str:=trim(s_str)+d_str;
i:=0;
while 1=1 do
begin
if pos(d_str,s_str)&gt;0 then
begin
j:=pos(d_str,s_str)+length(d_str);
k:=length(s_str)-(j-1);
i:=i+1;
if i=po then
begin
j:=pos(d_str,s_str);
result:=copy(s_str,1,j-1);
break;
end;
s_str:=copy(s_str,j,k);
end
else
break;
end;
end;</div>
<div>//得到当前日期的月首日和月末日
function get_date(da:TDateTime;zt:integer):TDateTime;
var
yy,mm,dd:string;
begin
yy:=formatdatetime('yyyy',da);
mm:=formatdatetime('mm',da);
if zt=0 then
dd:='01'
else
begin
if strtoint(mm) in [1,3,5,7,8,10,12] then
dd := '31'
else
if mm &lt;&gt; '2' then
dd:='30'
else
if IsLeapYear(YearOf(Da)) then
dd:='29'
else
dd:='28';
end;
DateSeparator := '-';
result:=strtodate(yy + '-' + mm +'-' + dd);
end;</div>
<div>//表的存在与否
function IsExist(tb:String;query:TADOQuery):Boolean;
var
sqlstr:String;
begin
sqlstr:='select * from sysobjects where id=object_id('''+tb+''')';
with query do
begin
close;
sql.Clear;
sql.Add(sqlstr);
open;
end;
if query.Recordset.EOF then
IsExist:=False
else
IsExist:=True;
end;</div>
<div>//用在Excel中，相当于26进制转换
function int2letter(num:integer):string;
const
LetterStr='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var
i,j:integer;
begin
if num&lt;=26 then
begin
result:=LetterStr[num];
end
else
begin
j:=num mod 26;
i:=num div 26;
if j=0 then
begin
j:=26;
i:=i-1;
end;
result:=int2letter(i)+LetterStr[j];
end;
end;</div>
<div>//是否整型
function IsInt(AStr: string): Boolean;
var
Value, Code: Integer;
begin
Val(AStr, Value, Code);
Result := Code = 0;
end;
//是否浮点型
function IsFloat(AStr: string): Boolean;
var
Value: Real;
Code: Integer;
begin
Val(AStr, Value, Code);
Result := Code = 0;
end;</div>
<div>下回再来 ：)</div>
<div>procedure RunScreenSave();
//--运行屏幕保护
begin
SendMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_SCREENSAVE, 0);
end;</div>
<div></div>
<div>//下面两个函数都是四舍五入的，主要是展现一种思路，随便用哪个都可以
function MyRound(Value: Double): integer;
//取整四舍五入
//这个版权归小枫所有
begin
result:= strtoint(FormatFloat('#',value));
end;</div>
<div>function doRound(Value: Double): integer;
//取整四舍五入
//这个我有一半，呵呵。
begin
if Value &lt; 0 then Result:= - doRound( -Value )
else
Result := round(int((value + 0.5) * 10)) div 10;
end;
//当然，这个函数还有其他的写法，如果你有不同的思路欢迎继续。。。</div>
<div>补充说明：
round这个函数本身采用的是“四舍六入五成双”的法则，虽然更科学，但是实际应用中没有几个用这种规则的。
我也贴几个自己常用的：
{-----------------------------------------------------------------------------
过程名: Msg
作者:   Gongqin
日期:   2003-6-9 16:57:44
参数:   AMsg : String; ATitle : String='提示'; AType : byte=0; btn : Longint=0
AType := 1 显示"信息"图标
2 显示"错误"图标
AMsg(显示的消息内容)   ATitle(显示标题)
btn   := 0 显示 OK
1 显示 Ok Cancel
2 显示 Yes No
3 显示 Retry and Cancel
4 显示 Abort, Retry, and Ignore
返回值: Integer
说明：  显示消息对话框
-----------------------------------------------------------------------------}
function Msg(AMsg: String;ATitle: String;AType: byte;btn: Longint): Integer;
var Flag : Longint;
begin
case AType of
1: Flag := MB_ICONQUESTION; //提问
2: Flag := MB_ICONERROR; //Error
3: Flag := MB_ICONSTOP;  //Stop
else
Flag := MB_ICONWARNING;
end;
case btn of
0 : Flag := Flag + MB_OK;
1 : Flag := Flag + MB_OKCANCEL;
2 : Flag := Flag + MB_YESNO;
3 : Flag := Flag + MB_YESNOCANCEL;
4 : Flag := Flag + MB_RETRYCANCEL;
5 : Flag := Flag + MB_ABORTRETRYIGNORE;
end;
result := Application.MessageBox(pchar(AMsg), pchar(ATitle), Flag);
end;</div>
<div>{-----------------------------------------------------------------------------
过程名: getAppPath
作者:   Gongqin
日期:   2003-6-9 17:01:17
参数:   None
返回值: string
说明：  取应用程序的路径
如果只用ExtractFilePath(ExtractFilePath(application.Exename))取路径
可能出错，所以加了处理
-----------------------------------------------------------------------------}
function getAppPath : string;
var
strTmp : string;
begin
strTmp := ExtractFilePath(ExtractFilePath(application.Exename));
if strTmp[length(strTmp)] &lt;&gt; '\' then
strTmp := strTmp + '\';
result := strTmp;
end;
下面是我自己整理的
http://www.myf1.net/bbs/dispbbs.asp?boardID=5&amp;ID=215239
//计算当前日期所在的季度的第一个月份和最后一个月份
//终极版
function QuarterBegin( TheDate : TDateTime = 0 ) : Integer;
//Copy Right 549@18:25 2003-9-3
begin
Result := ( Quarter( TheDate ) - 1 ) * 3 + 1;
end;</div>
<div>function QuarterEnd( TheDate : TDateTime = 0 ) : Integer;
//Copy Right 549@18:25 2003-9-3
begin
Result := ( Quarter( TheDate ) - 1 ) * 3 + 3;
end;</div>
<div>function Quarter( TheDate : TDateTime = 0 ) : Integer;
//Copy Right 549@10:06 2003-9-5
begin
Result := MonthOf( TheDate );
if TheDate = 0 then Result := MonthOf( Date );
Result := ( Result + 2 ) div 3;
end;</div>
</span></div>